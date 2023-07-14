import React, { useState, useEffect } from "react";
import axios from "axios";
import { resolvePath, useNavigate,Link } from "react-router-dom";
import Card from "./components/Card/index";
import avatar from "../../assets/img/avatars/avatarSimmmple.png";
import illustration from "../../assets/img/illustrions/illu2.png";

export default function Registration() {
  const navigate = useNavigate();

  const URL = "http://localhost:5000";

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState("");

  const [showPassword, setShowPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [formValues, setFormValues] = useState({
    name: "",
    category: "",
    email: "",
    password: ""
  });
  
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post(`${URL}/tutors/register`,formValues);
   
  //     if (response.data.status === true) {
  //       setSuccess("Registration successful."); 
  //       alert("Registration successful ")
  //       navigate("/");
  //       window.location.reload();
  //     } else {
  //       alert("Retry after some time");
  //     }
      

  //   } catch (error) {
  //     console.log(error);
  //     setErrors("Registration failed. Please try again later.");
  //   }
  // };

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <div className="flex flex-col relative top-0 items-center  min-h-screen pt-6 sm:justify-center sm:pt-0 bg-lightPrimary">
      <div>
        <a href="/">
          <div className="absolute top-5 ml-20 flex h-[80px] w-[80px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 z-50 hover:scale-102  hover:shadow-lg  ">
            <img className="h-full w-full rounded-full" src={avatar} alt="" />
          </div>
        </a>
        <div className="absolute right-20 top-60 flex h-[500px] w-[550px] items-center justify-center z-50  ">
          <img className="h-full w-full" src={illustration} alt="" />
        </div>
      </div>
      <Card
        extra={
          "w-full p-16 mt-2 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-[30px]"
        }
      >
        <div className="flex flex-col justify-center items-center p-2 ">
          <h1 className="font-poppins text-[3rem] ">Be Our Part ! </h1>
          <p className=" text-[13px] pb-3 text-center ">
            {" "}
            Registration designs, themes, templates and downloadable graphic
            elements on Dri{" "}
          </p>
        </div>
        <form  onSubmit={handleLogin} method="POST">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Name
            </label>
            <div className="flex flex-col items-start">
              <input
                id="outlined-basic"
                name="name" 
                type="text"
                autoComplete="given-name"
                variant="outlined"
                value={formValues.name}
                onChange={handleChange}
                required
                className="block w-full pl-4  h-[2rem] mt-1 border bg-white rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Category
            </label>
            <div className="flex flex-col items-start">
              <input
                id="category"
                name="category"
                type="text"
                autoComplete="given-category"
                value={formValues.category}
                onChange={handleChange}
                required
                className="block w-full pl-4  h-[2rem] mt-1 border bg-white rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Email
            </label>
            <div className="flex flex-col items-start">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formValues.email}
                onChange={handleChange}
                required
                className="block w-full pl-4 h-[2rem] mt-1 bg-white border   rounded-md shadow-sm "
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Password
            </label>
            <div className="flex flex-col items-start      ">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={formValues.password}
                onChange={handleChange}
                required
                className="block w-full h-[2rem] pl-4 mt-1 border bg-white rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  "
              />
            </div>

            <div className="absolute inset-y-0 pt-16 mt-1 right-14 pr-3 flex items-center">
              {showPassword ? (
                <span
                  className="material-symbols-outlined cursor-pointer "
                  onClick={togglePasswordVisibility}
                >
                  visibility_off
                </span>
              ) : (
                <span
                  className="material-symbols-outlined cursor-pointer "
                  onClick={togglePasswordVisibility}
                >
                  visibility
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center mt-4">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-navy-700 rounded-md hover:bg-navy-600 focus:outline-none focus:bg-navy-600"
          >
              Register
            </button>
          </div>
        </form>

        <div className="mt-4 text-grey-600">
          Already have an account?{" "}
          <span>
            <span>
              <Link className="text-purple-700 hover:underline" to="/">
                Login
              </Link>
            </span>
          </span>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full" />
          <p className="px-3 ">OR</p>
          <hr className="w-full" />
        </div>
        <div className="my-6 space-y-2">
          <button
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current "
              style={{ color: "white" }}
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
          <button
            aria-label="Login with GitHub"
            role="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2  dark:border-gray-400 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
            <p>Login with GitHub</p>
          </button>
        </div>
      </Card>
    </div>
  );
}
