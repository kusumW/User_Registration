const express=require('express')
var router = express.Router();
const  {getRegistration} = require('../controller/auth.js');

router.get('/user',getRegistration)

module.exports=router;