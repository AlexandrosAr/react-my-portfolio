const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const creds = require('./config');
const PORT = process.env.PORT || 5000;

let captchaSum = null;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/send-mail', (req, res) => {

    nodemailer.createTestAccount((err, acc) => {
        const htmlEmail = `
            <h3>Constact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <h4>Subject: ${req.body.subject}</h4>
            <p>${req.body.message}</p>`;

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: creds.USER, // generated ethereal user
                pass: creds.PASS // generated ethereal password
            }
        });

        let mailOptions = {
            from: req.body.email,
            to: creds.USER,
            replyTo: req.body.email,
            subject: req.body.subject,
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
            }

            console.log(`Message sent: ${info.message}`);
            console.log(`Message URL: ${nodemailer.getTestMessageUrl(info)}`);

        });
        console.log('Done!!!')
    });
    /*  res.send('Send mail!');
     console.log(req.body);
     console.log(captchaSum); */
})

app.post('/get-captcha-numbers', (req, res) => {
    const capchaNums = {
        num1: getRandomInt(50),
        num2: getRandomInt(50)
    }
    captchaSum = capchaNums.num1 + capchaNums.num2;
    res.send(capchaNums);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}