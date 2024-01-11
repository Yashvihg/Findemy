import { Password } from "@mui/icons-material";
import axios from "axios";
import { LoginInputs } from "../components/LoginForm/LoginForm";
import { SignupInputs } from "../components/Signup/Signup";


//get all courses - carousel
export const getCourse = async () => {
  try {
    const _res = await axios.get("http://localhost:5000/courses/getcourses");
    console.log(_res.data.data);
    return _res.data.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

//get one course by ID.
export const getCourseById = async (id: string) => {
  console.log(id);
  try {
    const _res = await axios.get(
      `http://localhost:5000/courses/getcourses/${id}`
    );
    console.log(_res.data.data);
    return _res.data.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

//search course by query param
export const getSearchedCourses = async (queryString: string) => {
  console.log(queryString);
  try {
    const _res = await axios.get(
      `http://localhost:5000/courses/search?query=${queryString}`
    );
    console.log(_res.data.data);
    return _res.data.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const postSignupUser = async (data: SignupInputs) => {
  try {
    const _res = await axios.post("http://localhost:5000/users/signup", data);
    console.log(_res);
    return _res.data
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const postLoginUser = async (data: LoginInputs) => {
  try {
    const _res = await axios.post("http://localhost:5000/users/login", data);
    console.log(_res);
    return _res.data
  } catch (err) {
    console.log(err);
    return false;
  }
};
