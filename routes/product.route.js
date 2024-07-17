let express = require('express');
const { productController } = require('../controller');
const { isLogin } = require('../middleware/auth');
const { upload } = require('../middleware/multer');
let router = express.Router();

router.get('/getproduct', isLogin, productController.getProductList);
router.post('/createproduct', upload.single('image'), productController.addProduct);
router.put('/updateproduct/:id', productController.updateProduct);
router.delete('/deleteproduct/:id', productController.deleteProduct);

module.exports = router;
