const router = require("express").Router();
const auth = require("../middleware/auth");
const adminController = require("../controllers/adminController");
const authAdmin = require('../middleware/authAdmin')

router.get('/get_total_users', auth, adminController.getTotalUsers);

router.get("/get_total_posts", auth, adminController.getTotalPosts);

router.get("/get_total_comments", auth, adminController.getTotalComments);

router.get("/get_total_likes", auth, adminController.getTotalLikes);

router.get("/get_total_spam_posts", auth, adminController.getTotalSpamPosts);

router.get("/get_spam_posts", auth, adminController.getSpamPosts);

router.delete("/delete_spam_posts/:id", auth, adminController.deleteSpamPost);

router.get('/all_infor', auth, authAdmin, adminController.getUsersAllInfor);

router.patch('/update_role/:id', auth, authAdmin, adminController.updateUsersRole);

router.delete('/delete/:id', auth, authAdmin, adminController.deleteUser);



module.exports = router;