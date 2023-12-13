const { createLogger, format, transports } = require('winston');
const { LogstashTransport } = require('winston-logstash-transport');
const path = require('path');
const fs = require('fs');

const logDirectory = path.join(__dirname, 'logs');
const logFilePath = path.join(logDirectory, 'app.log');

// Ensure the log directory exists
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const logger = createLogger({
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    // Log to the console
    new transports.Console(),

    // Log to a file
    new transports.File({ filename: '/app/logs/app.log'}),

    // Log to Logstash
    new LogstashTransport({
      host: 'logstash', // Replace with your Logstash host
      port: 5044, // Replace with your Logstash port
      format: format.combine(
        format.timestamp(),
        format.json()
      ),
      // other options...
    }),
  ],
});

module.exports = logger;
