//khai bao lop thu vien express
const express = require('express');

//khai bao lop thu vien body-parser
const bodyParser = require('body-parser');

//khai bao lop express
const app = express();

//import lop router
const aRoutes = require('./route');

//doc noi dung file usermodel
const {loadUser} = require('./usersmodel');

//su dung bien da khai bao
app.use(bodyParser.urlencoded({extended: false}));
app.use(aRoutes);

/*
app.use((req,res,next) => {
	res.status(404).send('<h1>Page not found</h1>');
	// ...
});
*/

/* doc file datanam.json
app.get('/users',(req,res,next) => {
	const data = loadUser();
	res.send(data);
	// ...
});
*/

//khoi chay server voi so port la 3000
app.listen(3000);
