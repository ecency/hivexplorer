const NUMERIC_REGEX = /^-?\d+(?:\.\d+)?$/;
const FRACTION_DIGITS_LIMIT = 8;

const clampFractionDigits = (digits: number) => {
  if (digits < 0) {
    return 0;
  }
  if (digits > FRACTION_DIGITS_LIMIT) {
    return FRACTION_DIGITS_LIMIT;
  }
  return digits;
};

const buildOptions = (
  baseOptions: Intl.NumberFormatOptions,
  derivedOptions: Intl.NumberFormatOptions
) => {
  return {
    ...derivedOptions,
    ...baseOptions
  };
};

const formatNumberWithIntl = (
  value: number,
  options: Intl.NumberFormatOptions
) => {
  const formatter = new Intl.NumberFormat(undefined, options);

  return formatter.format(value);
};

const MAX_SAFE_BIGINT = BigInt(Number.MAX_SAFE_INTEGER);
const MIN_SAFE_BIGINT = BigInt(Number.MIN_SAFE_INTEGER);

const GROUP_SEPARATOR_REGEX = /\B(?=(\d{3})+(?!\d))/g;

const formatIntegerWithGrouping = (
  value: string,
  options: Intl.NumberFormatOptions
) => {
  if (options.useGrouping === false) {
    return value;
  }

  const isNegative = value.startsWith("-");
  const unsigned = isNegative ? value.slice(1) : value;
  const grouped = unsigned.replace(GROUP_SEPARATOR_REGEX, ",");

  return `${isNegative ? "-" : ""}${grouped}`;
};

const formatBigIntValue = (
  value: bigint,
  options: Intl.NumberFormatOptions
) => {
  if (value <= MAX_SAFE_BIGINT && value >= MIN_SAFE_BIGINT) {
    return formatNumberWithIntl(Number(value), options);
  }

  return formatIntegerWithGrouping(value.toString(), options);
};

const inferFractionDigits = (
  value: string,
  options: Intl.NumberFormatOptions
): Intl.NumberFormatOptions => {
  if (options.minimumFractionDigits !== undefined || options.maximumFractionDigits !== undefined) {
    return options;
  }

  if (!value.includes(".")) {
    return options;
  }

  const [, decimalPart = ""] = value.split(".");
  const fractionDigits = clampFractionDigits(decimalPart.length);

  if (fractionDigits === 0) {
    return options;
  }

  return {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits
  };
};

const shouldFormat = (value: string) => {
  if (!NUMERIC_REGEX.test(value)) {
    return false;
  }

  if (value.toLowerCase().includes("e")) {
    return false;
  }

  return true;
};

export const formatNumericValue = (
  value: number | string,
  options: Intl.NumberFormatOptions = {}
): string => {
  if (typeof value === "number") {
    if (!Number.isFinite(value)) {
      return value.toString();
    }

    const asString = value.toString();

    if (asString.toLowerCase().includes("e")) {
      return asString;
    }

    const derived = inferFractionDigits(asString, options);
    const merged = buildOptions(options, derived);
    return formatNumberWithIntl(value, merged);
  }

  const trimmed = value.trim();

  if (!shouldFormat(trimmed)) {
    return value.toString();
  }

  if (trimmed.includes(".")) {
    const derived = inferFractionDigits(trimmed, options);
    const merged = buildOptions(options, derived);
    const numericValue = Number(trimmed);

    if (!Number.isFinite(numericValue)) {
      return value.toString();
    }

    return formatNumberWithIntl(numericValue, merged);
  }

  try {
    const numericValue = BigInt(trimmed);
    const merged = buildOptions(options, {});
    return formatBigIntValue(numericValue, merged);
  } catch (err) {
    const numericValue = Number(trimmed);

    if (!Number.isFinite(numericValue)) {
      return value.toString();
    }

    const merged = buildOptions(options, {});
    return formatNumberWithIntl(numericValue, merged);
  }
};

export default formatNumericValue;
