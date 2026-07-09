const revenueCalculator = (paramArray) => {
  const ordersArray = paramArray;
  if (ordersArray.length == 0) {
    return 0;
  }
  let electronicsRevenue = 0;
  let furnitureRevenue = 0;
  let stationeryRevenue = 0;
  ordersArray.forEach((order) => {
    if (!order.quantity) throw Error("Order's quantity is unavailable");

    if (!order.unit_price) throw Error("Order's price is unavailable");

    if (Number.isNaN(Number(order.quantity)) || Number(order.quantity) < 0)
      throw Error("Invalid order's quantity");

    if (Number.isNaN(Number(order.unit_price)) || Number(order.unit_price) < 0)
      throw Error("Invalid order's price");

    let revenue = Number(order.quantity) * Number(order.unit_price);
    if (order.category === "Electronics") electronicsRevenue += revenue;
    else if (order.category === "Furniture") furnitureRevenue += revenue;
    else stationeryRevenue += revenue;
  });
  let totalRevenue = electronicsRevenue + furnitureRevenue + stationeryRevenue;
  return {
    electronicsRevenue,
    furnitureRevenue,
    stationeryRevenue,
    totalRevenue,
  };
};
module.exports = revenueCalculator;
