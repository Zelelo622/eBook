const Router = require('express');
const router = new Router();
const bookRouter = require('./bookRouter');
const userRouter = require('./userRouter');
const authorRouter = require('./authorRouter');
const bookmarkRouter = require('./bookmarkRouter');




router.use('/user', userRouter);
router.use('/book', bookRouter);
router.use('/author', authorRouter);
router.use('/bookmark', bookmarkRouter);


module.exports = router;