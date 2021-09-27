const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.render('index', { title: 'Account Summary', accounts: accounts }));
// app.get('/savings', (res,res) => res.render('account', { account:accounts.savings}));
// app.get('/checking',(req,res)=> res.render('checking',{account:accounts.checking}));
// app.get('/credit', (req,res) => res.render('credit',{account: accounts.credit}));
app.get('/savings', (req, res) => {
    res.render('account', { account: accounts.savings })
});

app.get('/checking', (req, res) => {
    res.render('account', { account: accounts.checking })
});

app.get('/credit', (req, res) => {
    res.render('account', { account: accounts.credit })
});
app.get('/profile', (req, res) => res.render('profile', { user: users[0] }));

app.listen(3000, () => console.log('PS Project Running on port 3000!'));


//read account data
const accountData = fs.readFileSync('src/json/accounts.json').toString('utf-8');
const accounts = JSON.parse(accountData);

//read user data
const userData = fs.readFileSync('src/json/users.json').toString('utf-8');
const users = JSON.parse(userData);
