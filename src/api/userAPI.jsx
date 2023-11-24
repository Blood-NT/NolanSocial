import axios from "axios";
import { format } from 'date-fns';
import AsyncStorage from "@react-native-async-storage/async-storage";
const userAPI = "http://192.168.1.54:8083/user";



const login = async (id, password) => {
  const body = {
    id: id,
    password: password,
  }
  const res = await axios.post(`${userAPI}/login`, body);
  if(res.data.statusCode === 201){
    console.log("user không tồn tại");
  }
  console.log("aa",res.data.user);
  return res.data;
}

const loginByToken = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    const res = await axios.post(`${userAPI}/user/login-token`, {
      refreshToken: refreshToken,
    });
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};
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

const checkData = async () => {
  console.log("kkk", await AsyncStorage.getItem("cookie"));

}

const Mualike = async () => {

  const now = new Date();
  const formattedTime = format(now, 'yyyy-M-d H:m:s');
  console.log("time", formattedTime);
  const cookie = await AsyncStorage.getItem("cookie");
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

const Register = async(userName, password,email)=>{
  console.log("ress");
  const data = {
    id:userName,
    password:password,
    email:email
  }
  try
  {
    const res = await axios.post (`${userAPI}/register`,data)
    console.log("register",res.data);
    return res.data;
  }
  catch(error){
    console.log("cheat ",`${error}`);
}
}

// viết hàm xóa user
  
export {
  login,
  checkData,
  Mualike,
  loginByToken,
  Register
};
