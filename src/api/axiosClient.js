import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://greeny-test.herokuapp.com",
    // baseURL: "http://localhost:3001",
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }
});

console.log(process.env.REACT_APP_API);

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosClient;