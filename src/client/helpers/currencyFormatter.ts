export const formatCurrency = (amount: number) => {
  const currencyFormatter = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  });

  return currencyFormatter.format(amount);
};
