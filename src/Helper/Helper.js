import axios from 'axios';

const API = 'https://almanac-server.onrender.com/auth/signup';
const logAPI = 'https://almanac-server.onrender.com/auth/signin';

export const registerUser = async (formData) => {

  try {
    console.log("Request Started")
    const response = await axios.post(API, formData, {"Content-Type":"application/json"});T
    console.log('Registration successful:', response.data);
    console.log("Request Ended")
    return response.data;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};




export const signin = async (loginData) => {
  try {
    console.log("Request Started")
    const response = await axios.post(logAPI, loginData, {"contentType":"application/json"});
    console.log('login successful:', response);
    console.log("Request Ended")
    return response.data;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};






