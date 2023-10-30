import axios from "axios";
import { format } from 'date-fns';
import AsyncStorage from "@react-native-async-storage/async-storage";


// const userAPI = "http://192.168.149.238:8083/user";
const userAPI = "http://192.168.2.24:8083/user";



const login = async (email, password) => {
const body = {
  email:email,
  password:password,
}
const res = await axios.post(`${userAPI}/login`, body);
console.log("object");

return res.data;
}

// const login = async (email, password) => {
//   const formDataLogin = new FormData();
//   formDataLogin.append('username', email);
//   formDataLogin.append('password', password);
//   try {
//     const res = await axios.post("http://192.168.1.5:8083/upload", formDataLogin, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     const res1 = await axios.post("https://traodoisub.com/scr/login.php", formDataLogin, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     console.log("met", res.data);
//     const now = new Date();
//     await AsyncStorage.setItem("cookie",  JSON.stringify(res.data));
//     const formattedTime = format(now, 'yyyy-M-d H:m:s');
//     console.log(formattedTime);
//     checkData();
//     return res.data;
//   } catch (error) {
//     console.log(`${error}`);
//   }
// };

const checkData=async()=>
{
  console.log("kkk", await AsyncStorage.getItem("cookie"));

}

const Mualike = async () => {
 
  const now = new Date();
  const formattedTime = format(now, 'yyyy-M-d H:m:s');
  console.log("time",formattedTime);
  const cookie= await AsyncStorage.getItem("cookie");
  const formDataLike = new FormData();
  formDataLike.append('maghinho', "");
  formDataLike.append('id', 682372180583724);
  formDataLike.append('sl', 20);
  formDataLike.append('is_album', "not");
  formDataLike.append('speed', 1);
  formDataLike.append('dateTime', formattedTime);

  try {
    const res = await axios.post("https://traodoisub.com/mua/like/themid.php", formDataLike, {
      headers: {
     
        'Cookies': cookie,
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log("muaaa", res.headers);
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};


export {
  login,
  checkData,
  Mualike
};
