const { Router } = require('express');
const mainController = require('../controllers/mainController');
const { requireAuth, checkUserSchedule, checkUser } = require('../middleware/authMiddleware');

const router = Router();

router.get('*', checkUser); // Check which user is logged in
router.get('/', requireAuth, mainController.home);
router.get('/employee/:id', requireAuth, mainController.employee);
router.get('/schedules', requireAuth, checkUserSchedule, mainController.schedule_get);
router.post('/schedules', checkUserSchedule, mainController.schedule_post);


module.exports = router;