import fs from "fs"
import winston from "winston"

// const fsPromises = fs.promises

// async function log(logData){
//     try{
//         logData = `\n ${new Date().toString()} - ${logData}`;
//         await fsPromises.appendFile('log.txt', logData);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'logs.txt'}),
    ],
})

const loggerMiddleware = async(req, res, next)=>{
    if(!req.url.includes("signin"))
    {
        const logData = `${req.url} - ${JSON.stringify(req.body)}`
        logger.info(logData)
    }
    next();
}

export default loggerMiddleware;