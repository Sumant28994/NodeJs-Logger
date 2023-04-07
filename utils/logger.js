const winston = require('winston');

var loggertest='debug';

const logConfiguration = {
    transports: [
        new winston.transports.Console({
            level: loggertest
        }),
        new winston.transports.File({
            level: loggertest,
            // Create the log directory if it does not exist
            filename: 'logs/example.log'
        })
    ]
};

const logger = winston.createLogger(logConfiguration);

exports.logger = logger;