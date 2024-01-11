const Courses = require("../models/courseModel");

const getCourses = async (req, res) => {
  try {
    const data = await Courses.find();
    if (data) {
      return res.status(200).json({
        success: true,
        message: "Fetched courses successfully!",
        data: data,
      });
    }
  } catch (err) {
    return res.status(409).json({
      success: false,
      message: "Could not fetch courses!",
      errorCode: err,
    });
  }
};

const getCourseById = async (req, res) => {
  try {
    const id_to_search = req.params.id;
    const course = await Courses.findById(id_to_search);
    if (course) {
      return res.status(200).json({
        success: true,
        message: "Fetched course with the given ID!",
        data: course,
      });
    }
    else {
      return res.status(404).json({
        success: true,
        message: "Could not find course with given ID!",
        data: {}
      });
    }
  } catch (err) {
    return res.status(409).json({
      success: false,
      message: "Could not fetch course with the particular given ID",
      errorCode: err,
    });
  }
};

const getSearchedCourses = async (req, res, next) => {
  const queryString = req.query.query.toLowerCase();
  console.log(req.query.query.toLowerCase());
  try {
    const searchCoursesData = await Courses.find({
      $text: { $search: queryString },
    }).exec();
    if (searchCoursesData.length !== 0) {
      res.status(200).json({
        success: true,
        message: "Got courses for query string",
        data: searchCoursesData,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "No relevant Search details!!",
        data: [],
      });
    }
  } catch (err) {
    res.status(409).json({
      success: false,
      message: "Something went wrong!!",
    });
  }
};

module.exports = {
  getCourses,
  getCourseById,
  getSearchedCourses,
};
