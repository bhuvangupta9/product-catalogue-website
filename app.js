const express = require('express');
const expresslayouts = require('express-ejs-layouts');
const app = express();
const nodemailer = require('nodemailer');

//EJS
app.use(expresslayouts);
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));
app.use(express.json());


//Routes
app.use('/', require('./routes/index'));

app.use('/brand', require('./routes/brand'));

app.use('/about', require('./routes/about'));

app.use('/contact', require('./routes/contact'));

//contact form
app.post('/contact', (req, res)=> {
    console.log(req.body);

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: ''
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: '',
        subject: 'Message from ' + req.body.name + ' email/phone: ' + req.body.email,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (err, info)=> {
        if(err){
            console.log(err);
            res.send('error');
        }
        else{
            console.log('Email sent' + info.response);
            res.send('success');
        }
    })
});

const PORT = process.env.port || 5000;

app.listen(PORT, ()=> {console.log('Server started on port ' + PORT )});
