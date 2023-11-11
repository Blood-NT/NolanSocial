import axios from "axios";
import { format } from 'date-fns';
import AsyncStorage from "@react-native-async-storage/async-storage";




const apiUrlINS = "http://192.168.2.24:8083/instagram";

const getDay = () => {
  const now = new Date();
  const formattedTime = format(now, 'yyyy-M-d H:m:s');
  return formattedTime;
}


const postINSCmt = async (memoryCode, path, quantity, multiLineText) => {
  const formDataLogin = new FormData();
  formDataLogin.append('memoryCode', memoryCode);
  formDataLogin.append('quantity', quantity);
  formDataLogin.append('multiLineText', multiLineText);
  formDataLogin.append('path', path);
  try {
    const res = await axios.post(`${apiUrlINS}/cmt`, formDataLogin, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log("checkDay", getDay());

    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

const postINSFollow = async (memoryCode, path, quantity) => {
  const formDataLogin = new FormData();
  formDataLogin.append('memoryCode', memoryCode);
  formDataLogin.append('quantity', quantity);
  formDataLogin.append('path', path);
console.log("check ín");
  try {
    const res = await axios.post(`${apiUrlINS}/follow`, formDataLogin, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log("checkDay", getDay());

    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

// const postINSFollowTay = async (email, password) => {
//   const formDataLogin = new FormData();
//   formDataLogin.append('username', email);
//   formDataLogin.append('password', password);
//   try {
//     const res = await axios.post(`${apiUrlINS}/follow-tay`, formDataLogin, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     console.log("checkDay", getDay());

//     return res.data;
//   } catch (error) {
//     console.log(`${error}`);
//   }
// };



const postINSLike = async (memoryCode, path, quantity) => {
  const formDataLogin = new FormData();

  formDataLogin.append('memoryCode', memoryCode);
  formDataLogin.append('quantity', quantity);
  formDataLogin.append('path', path);

  try {
    const res = await axios.post(`${apiUrlINS}/like`, formDataLogin, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log("checkDay", getDay());

    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};



const postINSLikeCmt = async (memoryCode, path, quantity) => {
  const formDataLogin = new FormData();
  formDataLogin.append('memoryCode', memoryCode);
  formDataLogin.append('quantity', quantity);
  formDataLogin.append('path', path);

  try {
    const res = await axios.post(`${apiUrlINS}/like-cmt`, formDataLogin, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log("checkDay", getDay());

    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};
// const postINSLikeTay = async (email, password) => {
//   const formDataLogin = new FormData();
//   formDataLogin.append('username', email);
//   formDataLogin.append('password', password);
//   try {
//     const res = await axios.post(`${apiUrlINS}/like-tay`, formDataLogin, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     console.log("checkDay", getDay());

//     return res.data;
//   } catch (error) {
//     console.log(`${error}`);
//   }
// };
export {
  postINSCmt,
  postINSFollow,
  postINSLike,
  postINSLikeCmt,
  // postINSFollowTay,
  // postINSLikeTay,
};
