const myLoggers = require("log4js")
const { log_location } = require("../config")

myLoggers.configure({
  appenders: { mylogger: { type: "file", filename: log_location } },
  categories: { default: { appenders: ["mylogger"], level: "ALL" } },
})

const logger = myLoggers.getLogger("default")

const getIP = req => (req ? req.connection.remoteAddress : null)

exports.error = (feature, detail, err, req) => {
  logger.error(
    `[${getIP(req)}] ` + feature + " -> " + detail + " : " + JSON.stringify(err)
  )
  console.log(
    `[${getIP(req)}]`,
    `[${new Date().toLocaleString()}]`,
    "\x1b[31m[ERROR]\x1b[0m :",
    feature,
    ":",
    detail
  )
  console.log(err)
}

exports.success = (feature, detail, req) => {
  logger.info(`[${getIP(req)}] ` + feature + " -> " + detail)
  console.log(
    `[${getIP(req)}]`,
    `[${new Date().toLocaleString()}]`,
    "\x1b[32m[SUCCESS]\x1b[0m:",
    feature,
    ":",
    detail
  )
}

exports.warning = (feature, detail, req) => {
  logger.warn(`[${getIP(req)}] ` + feature + " -> " + detail)
  console.log(
    `[${getIP(req)}]`,
    `[${new Date().toLocaleString()}]`,
    "\x1b[33m[WARNING]\x1b[0m:",
    feature,
    ":",
    detail
  )
}

exports.info = (title, detail) => {
  logger.info(`[${getIP(req)}] ` + feature + " -> " + detail)
  console.log(
    `[${getIP(req)}]`,
    `[${new Date().toLocaleString()}]`,
    "\x1b[34m[INFO]\x1b[0m:",
    title,
    ":",
    detail
  )
}
exports.start_server = () => console.log("▂▃▅▆█ OMNI SLIDE SERVER █▆▅▃▂")
