import axios from "axios";
import { format } from 'date-fns';
import AsyncStorage from "@react-native-async-storage/async-storage";




const apiUrlTiktok = "http://192.168.1.5:8083/tiktok";



const postTiktokCmt = async (email, password) => {
  const formDataLogin = new FormData();
  formDataLogin.append('username', email);
  formDataLogin.append('password', password);
  try {
    const res = await axios.post(`${apiUrlTiktok}/cmt`, formDataLogin, {
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

const postTiktokFollow = async (email, password) => {
  const formDataLogin = new FormData();
  formDataLogin.append('username', email);
  formDataLogin.append('password', password);
  try {
    const res = await axios.post(`${apiUrlTiktok}/follow`, formDataLogin, {
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

const postTiktokTym = async (email, password) => {
  const formDataLogin = new FormData();
  formDataLogin.append('username', email);
  formDataLogin.append('password', password);
  try {
    const res = await axios.post(`${apiUrlTiktok}/tym-video`, formDataLogin, {
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
const postTiktokLikeVip = async (email, password) => {
  const formDataLogin = new FormData();
  formDataLogin.append('username', email);
  formDataLogin.append('password', password);
  try {
    const res = await axios.post(`${apiUrlTiktok}/like-vip`, formDataLogin, {
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
const postTiktokShare = async (email, password) => {
  const formDataLogin = new FormData();
  formDataLogin.append('username', email);
  formDataLogin.append('password', password);
  try {
    const res = await axios.post(`${apiUrlTiktok}/share`, formDataLogin, {
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

const postTiktokShareLive = async (email, password) => {
  const formDataLogin = new FormData();
  formDataLogin.append('username', email);
  formDataLogin.append('password', password);
  try {
    const res = await axios.post(`${apiUrlTiktok}/share-live`, formDataLogin, {
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
const postTiktokView = async (email, password) => {
  const formDataLogin = new FormData();
  formDataLogin.append('username', email);
  formDataLogin.append('password', password);
  try {
    const res = await axios.post(`${apiUrlTiktok}/view`, formDataLogin, {
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
  postTiktokCmt,
  postTiktokFollow,

  postTiktokLikeVip,
  postTiktokShareLive,
  postTiktokShare,
  postTiktokTym,
  postTiktokView

};
