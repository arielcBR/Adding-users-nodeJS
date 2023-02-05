const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

let users = [];

router.get('/', (req, res, next) => { 
    res
        .status(200)
        .render('home', {
        pageTitle: 'Home Page'
    });
});

router.post('/new-user', (req, res, next)=> {
    let name = req.body.name;
    users.push(name);
    res
        .status(200)
        .redirect('/users');
});

router.get('/users', (req, res) => {
    res
        .status(200)
        .render('users', {
            pageTitle: 'Users Page',
            users: users
        });
});

module.exports = router;