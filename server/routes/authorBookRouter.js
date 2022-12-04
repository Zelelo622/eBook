const Router = require('express');
const authorBookController = require('../controllers/authorBookController');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');


router.post('/', checkRole('ADMIN'), authorBookController.addAuthor);


module.exports = router;