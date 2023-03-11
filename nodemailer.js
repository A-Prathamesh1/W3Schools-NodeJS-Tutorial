var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
                user: 'psausekar@gmail.com',
                pass: '',
        },
});

var mailOptions = {
        from: 'psausekar@gmail.com',
        to: 'psausekar@gmail.com',
        subject: 'sending mail using nodejs',
        html: '<h1>this is easy</h1>',
};

transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
                console.log(err);
        } else {
                console.log('email sent' + info.response);
        }
});
