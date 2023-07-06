import axios from 'axios';

//Fetch all courses

export const getAllCourses = () =>{
    return axios.get('/api/courses');
};

//Fetch a specific course by ID

export const getCourseById = (courseId) => {
    return axios.get(`/get/courses/${courseId}`);
};

//Create a new course

export const createCourse = (courseData) => {
    return axios.post('/api/courses',courseData);
};

//update an existing course 

export const updateCourse = (courseId,courseData) => {
    return axios.put(`/api/courses/${courseId}`,courseData);
};

//Delete a course

export const deleteCourse = (courseId) => {
    return axios.delete(`/api/courses/${courseId}`);
};