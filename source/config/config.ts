import dotenv from 'dotenv';
dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const TELEGRAM_CHAT_ID = process.env.CHANNEL_ID;
const TOKEN = process.env.TOKEN;
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;
const NAMESPACE = 'Sample controller';
const DB = process.env.DB;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;
const DIALECT = process.env.DIALECT;
const SETTINGS = process.env.SETTINGS;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    server: SERVER,
    chat_id: TELEGRAM_CHAT_ID,
    api_url: TELEGRAM_API,
    ns: NAMESPACE,
    appsettings: SETTINGS
};

export const dataBaseConfig = {
    database: DB,
    username: USERNAME,
    password: PASSWORD,
    host: HOST,
    dialect: DIALECT
};
export default config;
