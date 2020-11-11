import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-bkend.herokuapp.com/",
});

export default instance;
