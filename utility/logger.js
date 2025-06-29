import fs from "fs/promises";

const logger = async (req, res, next) => {
  const logString = `${req.method} ${req.protocol} :// ${req.get("host")}${
    req.originalUrl
  }`;
  await fs.appendFile(
    `./log/LogFile-${new Date().getDate()}`,
    `[${new Date().toLocaleTimeString()}] : ${logString}\n`
  );
  console.log(logString);
  next();
};

export default logger;
