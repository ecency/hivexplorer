import formatNumericValue from "./format-numeric-value";

describe("formatNumericValue", () => {
  it("formats asset-like strings with thousands separators", () => {
    expect(formatNumericValue("1234567.890 HIVE")).toBe("1,234,567.890 HIVE");
  });

  it("keeps the original value when it is not numeric", () => {
    expect(formatNumericValue("not a number")).toBe("not a number");
  });

  it("formats plain numeric strings without symbols", () => {
    expect(formatNumericValue("9876543.21")).toBe("9,876,543.21");
  });
});
