var express = require('express');
const userService=require('../services/userService');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  userService.getAllUsers().then((data)=>{
    res.send(data)

  })
});
router.get('/:id', function(req, res, next) {
  userService.FindUserById(req.params.id).then((data)=>{
    res.send(data)

  })
});
router.post('/', function(req, res, next) {
  userService.CreateUser(req.body).then((data)=>{
    res.send(data)

  })
});

router.post('/:id', function(req, res, next) {
  userService.UpdateUser(req.body,req.params.id).then((data)=>{
    res.send(data)

  })
});

router.delete('/:id', function(req, res, next) {
  userService.deleteUser(req.params.id).then((data)=>{
    res.send(data)

  })
});

router.post('/validateuser', function(req, res, next) {
  userService.ValidateUser(req.body).then((data)=>{
    res.send(data)

  })
});

module.exports = router;
