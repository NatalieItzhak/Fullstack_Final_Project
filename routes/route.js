const express = require('express');
const router = express.Router();
const controlRoutes = require('../controllers/controller')

router
.get('/',(req, res)=>{
  controlRoutes.getPost(req, res);
})
.post('/',(req, res)=>{
  controlRoutes.creatPost(req, res);
})

  
  module.exports = router;