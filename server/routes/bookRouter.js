const Router = require('express');
const bookController = require('../controllers/bookController');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');


router.post('/', checkRole('ADMIN'), bookController.create);
router.get('/', bookController.getAll);
router.get('/:id', bookController.getOne);


module.exports = router;