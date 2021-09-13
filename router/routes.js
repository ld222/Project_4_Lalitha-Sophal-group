const { Router } = require('express');
const contentController = require('../controllers/contentController');
const { requireAuth, checkUser } = require('../middleware/authMiddleware');

const router = Router();

router.get('*', checkUser); // Check which user is logged in
router.get('/', requireAuth, contentController.home);

module.exports = router;