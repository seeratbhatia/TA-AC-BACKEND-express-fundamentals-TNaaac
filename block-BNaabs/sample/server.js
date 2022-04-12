var express = require('express');
var cookieParser = require('cookie-Parser');
var logger = require('morgan');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.use(cookieParser());

app.use(logger('tiny'));

app.use((req, res, next) => {
    console.log(req.cookie);
    next();
});

app.use("/about", (req, res, next) => {
    res.cookie('username', 'xyz');
    res.end('About Page');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});



app.listen(4000, () => {
    console.log('server is listening on port 4k')
})