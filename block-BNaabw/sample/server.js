// require

var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookieParser');

// instantiate the app

var app = express();

// middleware

app.use(express.json());
app.use(express.urlencoded({ extented: false }));
app.use(express.static(__dirname + "/public"));
app.use(logger("dev"));
app.use(cookieParser());


// routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/projects', (req, res) => {
    res.sendFile(__dirname + "/projects.html");
});

app.get('/user', (req, res) => {
    res.send('Users Page');
});

//404 middleware
app.use((req, res, next) => {
    res.send('Page Not Found');
});

//custom client/server error middleware

app.use((err, req, res, next) => {
    res.send('err');
});


app.listen(4000, () => {
    console.log('server is listening on port 4k')
})