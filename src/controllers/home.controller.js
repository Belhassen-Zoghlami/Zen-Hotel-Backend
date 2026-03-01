const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.homepage = (req,res) =>
    {

        if (!req.user)
        {
            return res.json({
                role: 'guest',
                home: 'client',
                message: 'welcome to the guest home page'
            });
        }
        const role = req.user.role;
        if( role == 'OWNER')
        {
            return res.json({
                role: "owner",
                home: '/owner',
                message: `welcome ${req.user.name}`
            });
        }
        if (  role  ==  'CLIENT')
        {
            return  res.json({
                role: 'client',
                home: '/client',
                message:  `welcome  client ${req.user.name}`
            });
        }
        if (role == 'ADMIN')
        {
            return res.json({
                role: 'admin',
                home :  '/admin',
                message: `welcome  admin  ${req.user.role}`
            });
        }

    }