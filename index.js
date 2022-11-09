const express = require('express');

// building an express app
const app = express();

// register view engine
app.set('view engine', 'ejs'); 

// listen for requests
app.listen(3000, () => {
    console.log(`listening on port: 3000`);
})

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/404', (req, res) => {
    res.render('404');
});