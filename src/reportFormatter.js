const revenueFormatter = (reportObj) => {
  const finalReport = `Revenue report : \n
| Electronics | Furniture | Statoniery | Total |\n
------------------------------------------------\n
|   ${reportObj.electronicsRevenue}   |   ${reportObj.furnitureRevenue}   |   ${reportObj.statoneryRevenue}   |   ${reportObj.totalRevenue}   |
    `;
  return finalReport;
};
module.exports = revenueFormatter;
