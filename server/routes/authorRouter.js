const Router = require('express');
const authorController = require('../controllers/authorController');
const router = new Router();



router.post('/', authorController.create);
router.get('/', authorController.getAll);


module.exports = router;