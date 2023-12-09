//khai bao lop thu vien express
const express = require('express');

//khai bao lop path
const path=require('path');

//khai bao lop dieu huong router
const router = express.Router();

//trang chu
router.get('/',(req,res,next) => {
	//console.log('In another middleware!');
	//res.send('<h1>Hello from Express!</h1>');
	res.sendFile(path.join(__dirname,'danhsach.html'));
})

//man hinh 1
router.get('/mh1',(req,res,next) => {
	res.sendFile(path.join(__dirname,'mh1.html'));
});

//man hinh 2
router.get('/mh2',(req,res,next) => {
	res.sendFile(path.join(__dirname,'mh2.html'));
});

//man hinh 3
router.get('/mh3',(req,res,next) => {
	res.sendFile(path.join(__dirname,'mh3.html'));
});

//man hinh 4
router.get('/mh4',(req,res,next) => {
	res.sendFile(path.join(__dirname,'mh4.html'));
});

//export module nay ra file app
module.exports = router;


