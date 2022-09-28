const Router = require('express');
const authorController = require('../controllers/authorController');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');


router.post('/', checkRole('ADMIN'), authorController.create);
router.get('/', authorController.getAll);
router.delete('/:id', checkRole('ADMIN'), authorController.delete);
router.put('/:id', authorController.update);
// router.post('/all', authorController.createAll);


module.exports = router;