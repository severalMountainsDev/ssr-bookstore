import { formatCurrency } from "./currencyFormatter";

describe("formatCurrency", () => {
  it("formats positive numbers correctly", () => {
    expect(formatCurrency(1234)).toBe("$1,234.00");
    expect(formatCurrency(1234.56)).toBe("$1,234.56");
    expect(formatCurrency(1000000)).toBe("$1,000,000.00");
  });

  it("formats negative numbers correctly", () => {
    expect(formatCurrency(-1234)).toBe("-$1,234.00");
    expect(formatCurrency(-1234.56)).toBe("-$1,234.56");
    expect(formatCurrency(-1000000)).toBe("-$1,000,000.00");
  });

  it("formats zero correctly", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });

  it("formats decimal numbers correctly", () => {
    expect(formatCurrency(1234.5678)).toBe("$1,234.57");
    expect(formatCurrency(0.01)).toBe("$0.01");
    expect(formatCurrency(0.1)).toBe("$0.10");
  });
});
