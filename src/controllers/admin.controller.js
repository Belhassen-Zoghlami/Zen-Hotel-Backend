const User = require('../models/user.model');
const mailing = require('../services/email.service');


exports.getAllUsers = async (req,res) =>

{
    const users = await User.find().select('-password');
    res.json(users);
};


exports.validateOwner = async (req,res)=>
{

    const { userId } = req.params;

    const user = await User.findById(userId);
    if (!user || user.role !== 'owner')
    {
        return res.status(400).json
        ({
            message: 'Invalid owner account'
        });
    }

    user.isValidated = true;
    await user.save();
    await mailing.sendOwnerValidationEmail(user);
    res.json({
        message: 'owner validated successfully! Email sent successfully.'
    });
};

exports.toggleUserStatus = async (req, res) =>
{
    const {userId} = req.params;
    const user = await User.findById(userId);

    if (!user)
    {
        return res.status(404).json
        ({
            message: 'User not found'
        });
    }

    user.isActive = !user.isActive;
    await user.save();

    res.json({
        message: `User is now set to ${user.isActive ? 'Active' : 'Inactive'}`
    })
};