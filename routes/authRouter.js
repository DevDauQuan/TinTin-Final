const router = require('express').Router()
const authController = require('../controllers/authController');
const auth = require('../middleware/auth')

router.post('/register', authController.register);

router.post('/activation', authController.activateEmail);

router.post('/login', authController.login);

router.post('/logout', authController.logout);

router.post('/refresh_token', authController.generateAccessToken);

router.post('/forgot', authController.forgotPassword)

router.post('/reset', auth, authController.resetPassword)

router.post('/google_login', authController.googleLogin);

router.post('/facebook_login', authController.facebookLogin);

module.exports = router;