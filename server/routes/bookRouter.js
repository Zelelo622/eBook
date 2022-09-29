const Router = require('express');
const bookController = require('../controllers/bookController');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');


router.post('/', checkRole('ADMIN'), bookController.create);
router.get('/', bookController.getAll);
router.get('/:id', bookController.getOne);
router.delete('/:id', bookController.delete);
router.put('/:id', bookController.update);


module.exports = router;