let userRouter = require('./user.route');
let productRouter = require('./product.route');
let orderRouter = require('./order.route');
let express = require('express');
let router = express.Router();

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/order', orderRouter);

module.exports = router;