const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;
let captchaSum = null;

app.use(bodyParser());;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/send-mail', (req, res) => {
    res.send('Send mail!');
    console.log(req.body);
    console.log(captchaSum);
})

app.post('/get-captcha-numbers', (req, res) => {
    const capchaNums = {
        num1: getRandomInt(5000),
        num2: getRandomInt(5000)
    }
    captchaSum = capchaNums.num1 + capchaNums.num2;
    res.send(capchaNums);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }