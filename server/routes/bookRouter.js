const Router = require('express');
const bookController = require('../controllers/bookController');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');


router.post('/', /*checkRole('ADMIN'),*/ bookController.create);
router.get('/', bookController.getAll);
router.get('/:id', bookController.getOne);
router.delete('/:id', /*checkRole('ADMIN'),*/ bookController.delete);
router.put('/:id', /*checkRole('ADMIN'),*/ bookController.update);


module.exports = router;