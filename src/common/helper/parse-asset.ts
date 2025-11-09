import { SMTAsset } from "@hiveio/dhive";

export enum Symbol {
  HIVE = "HIVE",
  HBD = "HBD",
  VESTS = "VESTS"
}

export enum NaiMap {
  "@@000000021" = "HIVE",
  "@@000000013" = "HBD",
  "@@000000037" = "VESTS"
}

export interface Asset {
  amount: number;
  formatted: string;
  symbol: Symbol;
}

const formatAmount = (amount: number, fractionDigits: number): string =>
  amount.toLocaleString("en-US", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits
  });

export default (sval: string | SMTAsset): Asset => {
  if (typeof sval === "string") {
    const sp = sval.split(" ");
    const amount = parseFloat(sp[0]);
    const decimalIndex = sp[0].indexOf(".");
    const fractionDigits = decimalIndex >= 0 ? sp[0].length - decimalIndex - 1 : 0;
    return {
      amount,
      formatted: formatAmount(amount, fractionDigits),
      symbol: Symbol[sp[1]]
    };
  } else {
    const amount = parseFloat(sval.amount.toString()) / Math.pow(10, sval.precision);
    return {
      amount,
      formatted: formatAmount(amount, sval.precision),
      symbol: NaiMap[sval.nai]
    };
  }
};
