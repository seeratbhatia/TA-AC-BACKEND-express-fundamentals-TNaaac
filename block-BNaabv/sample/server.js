var express = require('express');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));

app.use('/admin', (req, res, next) => {
    next('Unauthorized to access');
})


app.get('/', (req, res) => {
    res.sendFile("Welcome");
});

app.get('/about', (req, res) => {
    res.send('About Page');
})

app.use(( req, res, next) => {
    res.send('Page not Found')
});

app.use((err, req, res, next) => {
    res.status(5000).send(err);
})

app.listen(4000, () => {
    console.log('server is listening on port 4k')
})