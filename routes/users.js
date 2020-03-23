const express = require('express');
// const router =  express.Router();
const router = require('express-promise-router')();

const UserController = require('../controllers/users');
router.route('/')
    .get(UserController.index)
    .post(UserController.newUser);

router.route('/:userId')

    .get(UserController.getUser)
    .put(UserController.replaceUser)
    .patch(UserController.updateUser);

router.route('/:userId/cars')
    .get(UserController.getUserCars)
    .post(UserController.newUserCar);

//new royter

module.exports = router;
