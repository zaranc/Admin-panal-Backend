let express = require('express');
let router = express.Router();
let { orderController } = require('../controller');

router.get('/getorder', orderController.getOrderList);
router.post('/addorder', orderController.addOrder);
router.put('/updateorder/:id', orderController.updateOrder);
router.delete('/deleteorder/:id', orderController.deleteOrder);

module.exports = router;
