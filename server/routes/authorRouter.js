const Router = require('express');
const authorController = require('../controllers/authorController');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');


router.post('/', checkRole('ADMIN'), authorController.create);
// router.post('/all', authorController.createAll);
router.get('/', authorController.getAll);
router.delete('/:id', checkRole('ADMIN'), authorController.delete);


module.exports = router;