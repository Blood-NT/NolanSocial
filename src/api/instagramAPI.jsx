import axios from "axios";
import { format } from 'date-fns';
import AsyncStorage from "@react-native-async-storage/async-storage";




const apiUrlINS = "http://192.168.1.5:8083/instagram";



const postINSCmt = async (email, password) => {
  const formDataLogin = new FormData();
  formDataLogin.append('username', email);
  formDataLogin.append('password', password);
  try {
    const res = await axios.post(`${apiUrlINS}/cmt`, formDataLogin, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const now = new Date();
    const formattedTime = format(now, 'yyyy-M-d H:m:s');
    console.log(formattedTime, res.data);
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

const postINSFollow = async (email, password) => {
  const formDataLogin = new FormData();
  formDataLogin.append('username', email);
  formDataLogin.append('password', password);
  try {
    const res = await axios.post(`${apiUrlINS}/follow`, formDataLogin, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const now = new Date();
    const formattedTime = format(now, 'yyyy-M-d H:m:s');
    console.log(formattedTime, res.data);
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

const postINSFollowTay = async (email, password) => {
  const formDataLogin = new FormData();
  formDataLogin.append('username', email);
  formDataLogin.append('password', password);
  try {
    const res = await axios.post(`${apiUrlINS}/follow-tay`, formDataLogin, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const now = new Date();
    const formattedTime = format(now, 'yyyy-M-d H:m:s');
    console.log(formattedTime, res.data);
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};



const postINSLike = async (email, password) => {
  const formDataLogin = new FormData();
  formDataLogin.append('username', email);
  formDataLogin.append('password', password);
  try {
    const res = await axios.post(`${apiUrlINS}/like`, formDataLogin, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const now = new Date();
    const formattedTime = format(now, 'yyyy-M-d H:m:s');
    console.log(formattedTime, res.data);
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};



const postINSLikeCmt = async (email, password) => {
  const formDataLogin = new FormData();
  formDataLogin.append('username', email);
  formDataLogin.append('password', password);
  try {
    const res = await axios.post(`${apiUrlINS}/like-cmt`, formDataLogin, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const now = new Date();
    const formattedTime = format(now, 'yyyy-M-d H:m:s');
    console.log(formattedTime, res.data);
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};
const postINSLikeTay = async (email, password) => {
  const formDataLogin = new FormData();
  formDataLogin.append('username', email);
  formDataLogin.append('password', password);
  try {
    const res = await axios.post(`${apiUrlINS}/like-tay`, formDataLogin, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const now = new Date();
    const formattedTime = format(now, 'yyyy-M-d H:m:s');
    console.log(formattedTime, res.data);
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};
export {
  postINSCmt,
  postINSFollow,
  postINSLike,
  postINSLikeCmt,
  postINSFollowTay,
  postINSLikeTay,
};
