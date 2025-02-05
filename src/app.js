const fs = require('fs');
const path = require('path');

// const { accounts, users, writeJSON } = require('./data');
const accountRoutes = require('./routes/accounts.js');
const servicesRoutes = require('./routes/services.js');
const { accounts, users, writeJSON } = require('./data.js');
const express = require('express');
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({ extended: true }));

app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);
//read account data
// const accountData = fs.readFileSync('src/json/accounts.json', 'utf8');
// const accounts = JSON.parse(accountData);

// //read user data
// const userData = fs.readFileSync('src/json/users.json', 'utf8');
// const users = JSON.parse(userData);

//routing
app.get('/', (req, res) => res.render('index', { title: 'Account Summary', accounts: accounts }));
// app.get('/savings', (res,res) => res.render('account', { account:accounts.savings}));
// app.get('/checking',(req,res)=> res.render('checking',{account:accounts.checking}));
// app.get('/credit', (req,res) => res.render('credit',{account: accounts.credit}));

app.get('/profile', (req, res) => res.render('profile', { title: 'User Profile', user: users[0] }));


app.listen(3000, () => console.log('PS Project Running on port 3000!'));


