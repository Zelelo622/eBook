const Router = require('express');
const bookController = require('../controllers/bookController');
const router = new Router();


router.post('/', bookController.create);
router.get('/', bookController.getAll);
router.get('/:id', bookController.getOne);


module.exports = router;