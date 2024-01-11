const Users = require("../models/userModel");
const Courses = require("../models/courseModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const postSignupUser = async (req, res) => {
  const { email, fullName, password } = req.body;
  try {
    const userExists = await Users.find({ email });
    console.log(userExists, userExists.length);
    if (userExists.length > 0) {
      return res.status(409).json({
        success: false,
        message: "User with given email ID already exists",
      });
    } else {
      //hashing password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create user
      const user = await Users.create({
        fullName,
        email,
        password: hashedPassword,
      });

      //checks if userAcc created or not.
      if (user) {
        return res.status(201).json({
          success: true,
          message: "User profile Created succesfully!",
          _id: user.id,
          fullName: user.fullName,
          email: user.email,
          token: generateToken(user._id),
        });
      } else {
        res.status(400);
        throw new Error("Invalid user data");
      }
    }

    // console.log(user);
  } catch (err) {
    return res.status(409).json({
      success: false,
      message: "something went wrong",
      errorCode: err,
    });
  }
};

//LOGIN user
const postLoginUser = async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await Users.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      success: true,
      message: "User logged in successfully",
      _id: user.id,
      fullName: user.fullName,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
};

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const addToCart = async () => {
  try {
    const { courseId, userId } = req.body;
    const course = await Courses.findById(courseId);
    const user = await Users.findById(userId);
    if (user && course) {
      user.cart.push(course);
      user.save();
      return res.json(200).json({
        success: true,
        message: "Added to cart!",
      });
    } else {
      return res.json(409).json({
        success: false,
        message: "User doesn't exist or course doesn't exist",
      });
    }
  } catch (err) {
    return res.status(409).json({
      success: false,
      message: "something went wrong",
      errorCode: err,
    });
  }
};

const deleteFromCart = async () => {};

module.exports = {
  postSignupUser,
  postLoginUser,
  addToCart,
  deleteFromCart,
};
