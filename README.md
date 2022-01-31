# Telegram Alert Bot( NodeJS, Express, TypeScript). 

*Brief info: This app send all detected errors from you Project to TelegramBot *

1. Firstly install 2 modules [Nodemon](https://www.npmjs.com/package/nodemon) & [Concurrently](https://www.npmjs.com/package/concurrently) and all related modules from package.json:<br>
 - Nodeman will monitor for any changes in your source and automatically restart your server when your code changes.<br>
 - Concurrently module will help us to run  many scripts.<br>
 
*Also be advised that in package.json in scripts field `tsc -w` will create compilation from TS to JS process but automatic*
```bash
npm i nodemon concurrently
```

2.Before run app please create in your project `.env` and put in this file below codes as a example:
```bash
TOKEN=your token from telegram botFather
CHANNEL_ID=please create private channel and put here channelID in order to send all messages by this ID 
to your telegram
```

3.After that open your Postman as an example put below Object and send it as a method `POST`:
```bash
{
    "name": "TEST",
    "reason": "token fail",
    "trace":  "TEST"
}
```

4.Last step is just run you App:
```bash
npm run start
```
