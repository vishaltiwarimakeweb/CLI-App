const csvParser = (fileData) => {
  // console.log("Received in parser : ", fileData);
  const stringData = String(fileData);
  const splitArr = stringData.split("\n");
  const headerLine = splitArr[0];
  const seperateHeaders = headerLine.split(",");
  // console.log("Separate properties : ", seperateHeaders);
  let parsedOrders = [];
  for (let i = 1; i < splitArr.length; i++) {
    let oneOrder = splitArr[i];
    // console.log("One Order : ", oneOrder);
    let splitOrder = oneOrder.split(",");
    //console.log("Split one order : ", splitOrder);
    if (splitOrder.length != seperateHeaders.length)
      throw Error("Invalid orders file, a column is missing");
    const orderObj = {};
    for (let j = 0; j < seperateHeaders.length; j++) {
      // console.log("Header key : ", seperateHeaders[j]);
      orderObj[seperateHeaders[j]] = splitOrder[j];
    }
    parsedOrders.push(orderObj);
  }
  //console.log("Finally : ", parsedOrders);
  return parsedOrders;
};
module.exports = csvParser;
