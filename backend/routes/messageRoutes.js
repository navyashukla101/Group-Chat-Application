const express = require('express');
const { sendMessage, allMessages } = require('../controllers/messageControllers');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').post(protect,sendMessage);
router.route('/:chatId').get(protect,allMessages);

module.exports = router;