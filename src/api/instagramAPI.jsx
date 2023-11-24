import axios from "axios";
import { format } from 'date-fns';
import AsyncStorage from "@react-native-async-storage/async-storage";




const apiUrlINS = "http://192.168.1.4:8083/instagram";

const getDay = () => {
  const now = new Date();
  const formattedTime = format(now, 'yyyy-M-d H:m:s');
  return formattedTime;
}

const user = "admin";
const postINSCmt = async ( path, quantity, multiLineText) => {

  const date = getDay();
  const datasend = {
    id: path,
    sl: quantity,
    dateTime: date,
    noidung: multiLineText,
    user: user,
  };
  try {
    const res = await axios.post(`${apiUrlINS}/cmt`, datasend, {
      headers: {
        access_token: "accessToken"
      },
    });
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

const postINSFollow = async ( path, quantity) => {

  const date = getDay();
  const datasend = {
    id: path,
    sl: quantity,
    dateTime: date,
    user: user,
  };
  try {
    const res = await axios.post(`${apiUrlINS}/follow`, datasend, {
      headers: {
        access_token: "accessToken"

      },
    });

    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

const postINSLike = async ( path, quantity) => {
  
  const date = getDay();
  const datasend = {
    id: path,
    sl: quantity,
    dateTime: date,
    user: user,
  };

  try {
    const res = await axios.post(`${apiUrlINS}/like`, datasend, {
      headers: {
        access_token: "accessToken"
      },
    });
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};



const postINSLikeCmt = async ( path, quantity) => {
  const date = getDay();
  const datasend = {
    id: path,
    sl: quantity,
    dateTime: date,
    user: user,
  };

  try {
    const res = await axios.post(`${apiUrlINS}/like-cmt`, formDataLogin, {
      headers: {
        access_token: "accessToken"

      },
    });
    console.log("checkDay", getDay());

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
};
