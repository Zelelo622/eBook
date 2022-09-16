const Router = require('express');
const bookmarkController = require('../controllers/bookmarkController');
const router = new Router();



router.post('/', bookmarkController.create);
router.get('/', bookmarkController.getAll);


module.exports = router;