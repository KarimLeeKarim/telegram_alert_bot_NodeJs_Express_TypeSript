import dotenv from 'dotenv';
dotenv.config();

const SERVER_HOSTNAME = '0.0.0.0';
const SERVER_PORT = process.env.SERVER_PORT || 80;
const TELEGRAM_CHAT_ID = process.env.CHANNEL_ID;
const TOKEN=process.env.TOKEN;
const TELEGRAM_API=`https://api.telegram.org/bot${TOKEN}`;
const NAMESPACE = 'Sample controller';


const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    server: SERVER,
    chat_id: TELEGRAM_CHAT_ID,
    api_url:TELEGRAM_API,
    ns:NAMESPACE,
};

export default config;
