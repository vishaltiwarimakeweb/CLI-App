const revenueFormatter = (reportObj) => {
  console.log(`Revenue report : \n
| Electronics | Furniture | Statoniery | Total |\n
------------------------------------------------\n
|   ${reportObj.electronicsRevenue}   |   ${reportObj.furnitureRevenue}   |   ${reportObj.statoneryRevenue}   |   ${reportObj.totalRevenue}   |
    `);
};
module.exports = revenueFormatter;
