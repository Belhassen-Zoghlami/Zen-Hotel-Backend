const express = require('express');
const router = express.Router();
const roomController = require('../controllers/room.controller');
const auth = require('../middleware/auth.middleware');
const reqRoles = require('../middleware/role.middleware');

//get all rooms route
router.get('/:hotelId',auth,reqRoles('owner','admin'),roomController.GetHotelRooms);
//create room route
router.post('/:hotelId',auth,reqRoles('owner','admin'),roomController.CreateRoom);
//get room by id route
router.get('/:roomId',auth,reqRoles('owner','admin'),roomController.GetRoom);
//update room route
router.patch('/:roomId',auth,reqRoles('owner','admin'),roomController.UpdateRoom);
//delete room route
router.delete('/:roomId',auth, reqRoles('owner','admin'), roomController.DeleteRoom);

module.exports = router;