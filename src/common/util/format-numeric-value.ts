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
  value: number | bigint,
  options: Intl.NumberFormatOptions
) => {
  const formatter = new Intl.NumberFormat(undefined, options);

  if (typeof value === "bigint") {
    return formatter.format(value as unknown as number);
  }

  return formatter.format(value);
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
    return formatNumberWithIntl(numericValue, merged);
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
