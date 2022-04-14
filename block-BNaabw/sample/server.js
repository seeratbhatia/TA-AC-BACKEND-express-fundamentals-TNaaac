var express = require('express');

// reqire 

var app = express();
var logger = require('morgan');
var cookieParser = require('cookieParser');

// middleware

app.use(express.json());
app.use(express.urlencoded({ extented: false }));

app.use(logger('dev'));
app.use(cookieParser());

app.use((req, res, next) => {
    res.cookie("username", "xyz");
    next();
})

// routes
app.get('/', (req, res) => {
    res.send('<h2>Welcome to express</h2>')
});

app.get('/about', (req, res) => {
    res.send('My name is qwerty');
});

app.post('/form', (req, res) => {
    res.json(req.body);
});

app.post('/json', (req, res) => {
    res.json(req.body);
});

app.get('/user/:username', (req, res) => {
    var username = req.params.username;
    res.send('<h2>${username}</h2>')
});

//404 middleware
app.use((req, res, next) => {
    res.send('Page Not Found');
});

//custom middleware

app.use((err, req, res, next) => {
    res.send('err');
});


app.listen(3000, () => {
    console.log('server is listening on port 3k')
})