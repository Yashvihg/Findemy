const express = require("express");
const router = express.Router();
const {
  getCourses,
  getCourseById,
  getSearchedCourses,
  updateGoal,
  deleteGoal,
} = require("../controllers/courseController");

router.get('/getcourses', getCourses)
router.get('/getcourses/:id', getCourseById)
router.get('/search', getSearchedCourses)


module.exports = router;
