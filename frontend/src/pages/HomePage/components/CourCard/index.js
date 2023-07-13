import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/card.css";

import { BsArrowUpRightCircle } from "react-icons/bs";

import cover from "../../../../assets/img/covers/fsd4.gif";

import avatar from "../../../../assets/img/avatars/avatar3.png";

import { getAllCourses } from "../../../../utils/api/courseApi";
import { getTutorById } from "../../../../utils/api/tutorApi";

const Card = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [tutors, setTutors] = useState([]);

  // navgation

  const ProfileButtonClick = (event) => {
    event.preventDefault();
    navigate("/pro");
  };
  const ContentButtonClick = (event) => {
    event.preventDefault();
    navigate("/content");
  };

  // Get category cover image
  const getCategoryCoverImage = (category) => {
    if (category === "React") {
      return "../../../../assets/img/covers/react.gif";
    } else if (category === "Angular") {
      return "../../../../assets/img/covers/angular.gif";
    } else if (category === "Vue") {
      return "../../../../assets/img/covers/vue.gif";
    }
    // Add more category cover images as needed

    // Default cover image
    return "../../../../assets/img/covers/default.gif";
  };

  //fetching tutor and courses

  useEffect(() => {
    const fetchTutors = async (tutorId) => {
      try {
        const response = await getTutorById(tutorId);
        setTutors((prevTutors) => [...prevTutors, response.data]);
      } catch (error) {
        console.log("Failed to fetch tutors:", error);
      }
    };

    const fetchCourses = async () => {
      try {
        const response = await getAllCourses();
        setCourses(response.data);
        response.data.forEach((course) => {
          fetchTutors(course.tutorId);
        });
      } catch (error) {
        console.log("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="group">
      {courses.map((course) => (
        <div
          className="box rounded-[2rem] h-[30rem] w-96 bg-white p-4 transition-all duration-300 ease-in-out  hover:cursor-pointer hover:border "
          key={course._id}
        >
          <img
            className="thumb w-full rounded-lg h-60 object-cover"
            src={getCategoryCoverImage(course.category)}
            alt={course.courseTitle}
          />

          <div className="tutor mb-6 mt-4 flex items-center gap-8">
            {tutors.map((tutor) => {
              if (tutor._id === course.tutorId) {
                return (
                  <img
                    key={tutor._id}
                    className="w-12 h-12 ml-4 mb-[5rem] rounded-full object-cover"
                    src={tutor.avatar}
                    alt={tutor.name}
                    onClick={ProfileButtonClick}
                  />
                );
              }
              return null;
            })}
            <div className="details">
              <h3 className="title text-2xl font-bold capitalize ">
                {course.courseTitle}
              </h3>
              <h4 className="text-gray-800 ">{course.tutor.name}</h4>
              <span className="text-gray-700">{course.uploadedAt}</span>

              <div className=" relative flex flex-row gap-2 top-10 right-10 ">
                <div>
                  <lord-icon
                    src="https://cdn.lordicon.com/xddtsyvc.json"
                    trigger="hover"
                    colors="primary:#121331"
                    state="hover"
                    style={{ width: "25px", height: "25px" }}
                  />
                </div>
                <h3 className="text-gray-800 ">{course.videoCount} Videos</h3>
              </div>

              <div
                className=" relative top-6 left-[12rem] text-[3rem]"
                onClick={ContentButtonClick}
              >
                <BsArrowUpRightCircle />
              </div>
              <div className=" relative  opacity-0 group-hover:opacity-100 bottom-[25rem] left-[13rem] transition-all duration-300 ">
                <lord-icon
                  className="cursor-pointer"
                  src="https://cdn.lordicon.com/gigfpovs.json"
                  trigger="hover"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
