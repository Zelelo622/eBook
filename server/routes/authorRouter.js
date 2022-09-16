const Router = require('express');
const authorController = require('../controllers/authorController');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');


router.post('/', checkRole('ADMIN'), authorController.create);
router.get('/', authorController.getAll);


module.exports = router;