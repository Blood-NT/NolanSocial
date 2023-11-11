// import axios from "axios";
// import { format } from 'date-fns';
// import AsyncStorage from "@react-native-async-storage/async-storage";




// const apiUrlTiktok = "http://192.168.2.24:8083/tiktok";

// const getDay = () => {
//   const now = new Date();
//   const formattedTime = format(now, 'yyyy-M-d H:m:s');
//   return formattedTime;
// }


// const postTiktokCmt = async (memoryCode, path, quantity, multiLineText) => {
//   const formDataLogin = new FormData();
//   formDataLogin.append('memoryCode', memoryCode);
//   formDataLogin.append('quantity', quantity);
//   formDataLogin.append('multiLineText', multiLineText);
//   formDataLogin.append('path', path);

//   try {
//     const res = await axios.post(`${apiUrlTiktok}/cmt`, formDataLogin, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     console.log("checkDay",getDay());
//     return res.data;
//   } catch (error) {
//     console.log(`${error}`);
//   }
// };



// const postTiktokFollow = async (memoryCode, path, quantity) => {
//   const formDataLogin = new FormData();
//   formDataLogin.append('memoryCode', memoryCode);
//   formDataLogin.append('quantity', quantity);
//   formDataLogin.append('path', path);

//   try {
//     const res = await axios.post(`${apiUrlTiktok}/follow`, formDataLogin, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     console.log("checkDay",getDay());
//     return res.data;
//   } catch (error) {
//     console.log(`${error}`);
//   }
// };

// const postTiktokTym = async (memoryCode, path, quantity) => {
//   const formDataLogin = new FormData();
//   formDataLogin.append('memoryCode', memoryCode);
//   formDataLogin.append('quantity', quantity);
//   formDataLogin.append('path', path);

//   try {
//     const res = await axios.post(`${apiUrlTiktok}/tym-video`, formDataLogin, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     console.log("checkDay",getDay());
//     return res.data;
//   } catch (error) {
//     console.log(`${error}`);
//   }
// };
// const postTiktokLikeVip = async (memoryCode, path, quantity, selectedDay, selectedLike,selectedSpeed) => {
//   const formDataLogin = new FormData();
//   formDataLogin.append('memoryCode', memoryCode);
//   formDataLogin.append('quantity', quantity);
//   formDataLogin.append('path', path);
//   formDataLogin.append('selectedDay', selectedDay);
//   formDataLogin.append('selectedLike', selectedLike);
//   formDataLogin.append('selectedSpeed', selectedSpeed);

//   try {
//     const res = await axios.post(`${apiUrlTiktok}/like-vip`, formDataLogin, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     console.log("checkDay",getDay());
//     return res.data;
//   } catch (error) {
//     console.log(`${error}`);
//   }
// };
// const postTiktokShare = async (memoryCode,path,quantity ) => {
//   const formDataLogin = new FormData();
//   formDataLogin.append('memoryCode', memoryCode);
//   formDataLogin.append('quantity', quantity);
//   formDataLogin.append('path', path);

//   try {
//     const res = await axios.post(`${apiUrlTiktok}/share`, formDataLogin, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     console.log("checkDay",getDay());
//     return res.data;
//   } catch (error) {
//     console.log(`${error}`);
//   }
// };

// const postTiktokShareLive = async (memoryCode, path, quantity) => {
//   const formDataLogin = new FormData();
//   formDataLogin.append('memoryCode', memoryCode);
//   formDataLogin.append('quantity', quantity);
//   formDataLogin.append('path', path);

//   try {
//     const res = await axios.post(`${apiUrlTiktok}/share-live`, formDataLogin, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     console.log("checkDay",getDay());
//     return res.data;
//   } catch (error) {
//     console.log(`${error}`);
//   }
// };
// const postTiktokView = async (memoryCode, path, quantity) => {
//   const formDataLogin = new FormData();
//   formDataLogin.append('memoryCode', memoryCode);
//   formDataLogin.append('quantity', quantity);
//   formDataLogin.append('path', path);

//   try {
//     const res = await axios.post(`${apiUrlTiktok}/view`, formDataLogin, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     console.log("checkDay",getDay());
//     return res.data;
//   } catch (error) {
//     console.log(`${error}`);
//   }
// };

// export {
//   postTiktokCmt,
//   postTiktokFollow,

//   postTiktokLikeVip,
//   postTiktokShareLive,
//   postTiktokShare,
//   postTiktokTym,
//   postTiktokView

// };



import axios from "axios";
import { format } from 'date-fns';
import AsyncStorage from "@react-native-async-storage/async-storage";




const apiUrlTiktok = "http://192.168.2.24:8083/tiktok";

const getDay = () => {
  const now = new Date();
  const formattedTime = format(now, 'yyyy-M-d H:m:s');
  return formattedTime;
}

const postTiktokCmt = async (memoryCode, path, quantity, multiLineText) => {
  const data = {
    memoryCode,
    quantity,
    multiLineText,
    path,
  };

  try {
    const res = await axios.post(`${apiUrlTiktok}/cmt`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log("checkDay", getDay());
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};


const postTiktokFollow = async (memoryCode, path, quantity) => {
  const data = {
    memoryCode,
    quantity,
    path,
  };

  try {
    const res = await axios.post(`${apiUrlTiktok}/follow`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log("checkDay", getDay());
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
}

const postTiktokTym = async (memoryCode, path, quantity) => {
  const data = {
    memoryCode,
    quantity,
    path,
  };

  try {
    const res = await axios.post(`${apiUrlTiktok}/tym-video`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log("checkDay", getDay());
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
}

const postTiktokLikeVip = async (memoryCode, path, quantity, selectedDay, selectedLike, selectedSpeed) => {
  const data = {
    memoryCode,
    quantity,
    path,
    selectedDay,
    selectedLike,
    selectedSpeed
  };

  try {
    const res = await axios.post(`${apiUrlTiktok}/like-vip`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log("checkDay", getDay());
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
}
const postTiktokShare = async (memoryCode, path, quantity) => {
  const data = {
    memoryCode,
    quantity,
    path,
  };

  try {
    const res = await axios.post(`${apiUrlTiktok}/share`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log("checkDay", getDay());
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

const postTiktokShareLive = async (memoryCode, path, quantity) => {
  const data = {
    memoryCode,
    quantity,
    path,
  };

  try {
    const res = await axios.post(`${apiUrlTiktok}/share-live`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log("checkDay", getDay());
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
}


const postTiktokView = async (memoryCode, path, quantity) => {
  const data = {
    memoryCode,
    quantity,
    path,
  };

  try {
    const res = await axios.post(`${apiUrlTiktok}/view`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log("checkDay", getDay());
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
}

export {
  postTiktokCmt,
  postTiktokFollow,

  postTiktokLikeVip,
  postTiktokShareLive,
  postTiktokShare,
  postTiktokTym,
  postTiktokView

};

