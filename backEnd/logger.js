import pino from "pino";

const logger = pino({
  level: "debug", // sab logs: debug, info, warn, error
  transport: {
    target: "pino-pretty" // readable format
  }
});

export default logger;