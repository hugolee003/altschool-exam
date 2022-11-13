const express = require('express');
const morgan = require('morgan');
const path = require('path');

// building an express app
const app = express();

// register view engine
app.set('view engine', 'ejs'); 

// listen for requests
app.listen(3000, () => {
    console.log(`listening on port: 3000`);
})

// setting up middleware with morgan and static files
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
    const blogs = [
        {title: 'How to use chrome developer tools', snippet: 'lorem ipsum dolor sit amet, consectetur'},
        {title: 'Creating a product that sells', snippet: 'lorem ipsum dolor sit amet, consectetur'},
        {title: 'Inside story: Meta staff layoff', snippet: 'lorem ipsum dolor sit amet, consectetur'},
    ];
    res.render('index', { title: ' Home ', blogs});
});

app.get('/about', (req, res) => {
    res.render('about', { title: ' About '});
});

// handler function
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog '});
});

app.use((req, res) => {
    res.status(404).render('404', { title: ' 404 '});
});

app.disable('etag');