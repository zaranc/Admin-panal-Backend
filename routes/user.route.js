let express = require('express');
const { userController } = require('../controller');
const { isLogin } = require('../middleware/auth');
const { upload } = require('../middleware/multer');
const uploadImage = require('../middleware/cloudinary');
let router = express.Router();

router.get('/getuser', isLogin, userController.getUserList);
router.post('/createuser', upload.single('profile'), userController.addUser);
router.post('/login', userController.loginUser);
router.put('/updateuser/:id', userController.updateUser);
router.delete('/deleteuser/:id', userController.deleteUser);

module.exports = router;