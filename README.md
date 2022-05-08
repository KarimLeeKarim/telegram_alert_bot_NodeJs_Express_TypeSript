# Telegram Alert Bot( NodeJS, Express, TypeScript and Postgres). 

*Brief info: This app send all detected errors from you Project to TelegramBot and add to DataBase, also if you will have in future more values for this I have added pagination where you will be able to manipulate data from UI side*

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

3.Last step is just run you App:
```bash
npm run start
```

4.After that open your Postman as an example put below Object and send it as a method `POST` to this <br>
url- `localhost:80/alert-service/v1/alert`:
```bash
{
    "name": "TEST",
    "reason": "token fail",
    "trace":  "TEST"
}
```

5.If you would like to filter by special value you can use this URL and choose method `GET` to this <br>
url- `localhost:80/alert-service/v1/alert-info?trace=example`:
```bash
{
    "name": "TEST",
    "reason": "token fail",
    "trace":  "TEST"
}
```

6.For get special page you need use this URL and choose method `GET` to this <br>
url- `localhost:80/alert-service/v1/alert-info?page=1` or indicate special page and size(values per page) `localhost:80/alert-service/v1/alert-info?page=1&size=3`


