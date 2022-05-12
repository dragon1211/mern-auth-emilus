import nodemailer from 'nodemailer';

/*var mailer =nodemailer.createTransport({
    host: "e1.valueserver.jp",  // More at https://nodemailer.com/smtp/well-known/#supported-services
    port: 25,
    auth: {
        user: "support@fantaion-coin.com", // Your email id
        pass: "ZE9y3U6YcaEG" // Your password
    }
});*/

var mailer_reg = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com', 
    auth: {
        user: 'fantation2022@gmail.com',
        pass: 'fant2022'
    }
});


export default {
    mailer_reg
}