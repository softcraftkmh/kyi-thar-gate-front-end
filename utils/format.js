export const formatMoney = money => {
  const fixed = Number(Number(money).toFixed(2));
  return fixed.toLocaleString() + " Kyats";
};
