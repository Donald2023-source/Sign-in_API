import axios from 'axios';

const API = 'https://almanac-server.onrender.com/auth/signup';
const logAPI = 'https://almanac-server.onrender.com/auth/signin';

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(API, formData, {"contentType":"application/json"});
    alert('Registration Successful')
    console.log('Registration successful:', response.data);
    return response.data;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};




export const signin = async (loginData) => {
  try {
    const response = await axios.post(logAPI, loginData, {"contentType":"application/json"});
    console.log('login successful:', response.data);
    return response.data;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    throw error;
  }
};






