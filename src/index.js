const fs = require("fs/promises");
const path = require("path");
const filePath = process.argv[2];
if (!filePath) {
  console.error("Usage: node src/index.js <csv-file>");
  process.exit(1);
}
const absolutePath = path.resolve(filePath);
const csvParser = require("./csvParser");
const revenueCalculator = require("./revenueCalculator");
const revenueFormatter = require("./reportFormatter");
const readFileData = async () => {
  try {
    const fileData = await fs.readFile(absolutePath, "utf-8");
    if (fileData.trim().length == 0) {
      console.error("File is empty");
      process.exit(1);
    }
    let result = fileData;
    return result;
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
const sendToParser = async () => {
  const dataReceived = await readFileData();
  return csvParser(dataReceived);
};
const calculateRevenue = async () => {
  let parsedOrders = await sendToParser();
  return revenueCalculator(parsedOrders);
};
const formatReport = async () => {
  const revenueObj = await calculateRevenue();
  console.log(revenueFormatter(revenueObj));
};
formatReport();
