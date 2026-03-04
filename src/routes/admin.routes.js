const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const reqRole = require('../middleware/role.middleware');
const adminController = require('../controllers/admin.controller');

router.get(

    '/users',
    auth,
    reqRole('admin'),
    adminController.getAllUsers
);


router.patch(
    '/validate-owner/:userId',
    auth,
    reqRole('admin'),
    adminController.validateOwner
);


router.patch(
    '/toggle-user/:userId',
    auth,
    reqRole('admin'),
    adminController.toggleUserStatus
);

module.exports = router;