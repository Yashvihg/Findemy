const express = require("express");
const router = express.Router();
const { postSignupUser, postLoginUser, addToCart, deleteFromCart } = require("../controllers/userController");

router.post("/signup", postSignupUser);
router.post("/login", postLoginUser);
router.post("/addcart", addToCart);
router.post("/deletecart", deleteFromCart);
// router.get('/getcourses/:id', getCourseById)
// router.get('/search', getSearchedCourses)

module.exports = router;
