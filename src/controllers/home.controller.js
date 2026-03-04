const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.homepage = (req,res) =>
    {

        if (!req.user)
        {
            return res.status(200).json
            ({
                authenticated: false,
                role: 'guest',
                home: 'client',
                permissions: [],
                message: 'Client home'
            });
        }
        const { role } = req.user.role;
        if( role === 'client')
        {
            return res.status(200).json
            ({
                authenticated: true,
                role: "owner",
                home: 'owner',
                permissions:['manage_own_hotels','view_bookings'],
                message: `welcome owner ${req.user.name}`
            });
        }
        if (  role  ===  'client')
        {
            return  res.status(200).json
            ({
                authenticated: true,
                role: 'client',
                home: 'client',
                permissions:['book_hotel','view_reservations'],
                message:  `welcome  client ${req.user.name}`
            });
        }
        if (role === 'admin')
        {
            return res.status(200).json({

                authenticated:true,
                role: 'admin',
                home :  'admin',
                permissions: ['manage_users','manage_hotels','view_reports'],
                message: `welcome  admin  ${req.user.role}`
            });
        }

    }