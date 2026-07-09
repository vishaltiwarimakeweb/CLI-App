const fs = require("fs/promises");
const csvParser = require("./csvParser");
const readFileData = async () => {
  try {
    const fileData = await fs.readFile("./src/data/orders.csv", "utf-8");
    if (!fileData.length > 0) {
      console.error("File is empty");
      process.exit(1);
    }
    let result = fileData;
    return result;
  } catch (error) {
    console.error(error.message);
    return "";
  }
};
const sendToParser = async () => {
  const dataReceived = await readFileData();
  csvParser(dataReceived);
};
sendToParser();
