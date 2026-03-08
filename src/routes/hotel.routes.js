const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const reqRoles = require('../middleware/role.middleware');

const hotelController = require('../controllers/hotel.controller');

//create route
router.post('/',auth,reqRoles('owner','admin'),hotelController.CreateHoltel);
//get all trivagos route
router.get('/',auth,reqRoles('owner','admin'),hotelController.GetAllHotels);
//get hotel by id route
router.get('/:id',auth,reqRoles('owner','admin'),hotelController.GetHotel);
//update hotel route
router.patch('/:id',auth,reqRoles('owner','admin'),hotelController.UpdateHotel);
//delete hotel route
router.delete('/:id',auth,reqRoles('owner','admin'),hotelController.DeleteHotel);

module.exports = router;

