const express = require('express');
const router = express.Router();
const {adminLogin} = require('../controllers/adminController');
router.post("/auth/login",adminLogin);
const protect = require('../middleware/protect');
module.exports = router;
