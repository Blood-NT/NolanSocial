import axios from "axios";
import { format } from 'date-fns';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { id } from "date-fns/locale";
// import { get } from "react-native/libraries/turbomodule/turbomoduleregistry";


const getIDAPI = "https://id.traodoisub.com/api.php"

const apiUrlFB = "http://192.168.2.24:8083/facebook";

const getDay = () => {
  const now = new Date();
  const formattedTime = format(now, 'yyyy-M-d H:m:s');
  return formattedTime;
}
const getIDfromLink = async (link) => {
  const idformdata = new FormData();
  idformdata.append('link', link);
  try {
    const idres = await axios.post(getIDAPI, idformdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return idres.data.id;
  } catch (error) {
    console.log(`${error}`);
  }

}
const postFBCmt = async (memoryCode, path, quantity, multiLineText) => {
  const formDataFbCmt = new FormData();
  formDataFbCmt.append('memoryCode', memoryCode);
  formDataFbCmt.append('quantity', quantity);
  formDataFbCmt.append('multiLineText', multiLineText);
  const id = await getIDfromLink(path);
  formDataFbCmt.append('id', id);
  try {
    const res = await axios.post(`${apiUrlFB}/cmt`, formDataFbCmt, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

const postFBFollow = async (memoryCode, path, quantity) => {
  const fbdollowFormData = new FormData();
  fbdollowFormData.append('memoryCode', memoryCode);
  fbdollowFormData.append('quantity', quantity);

  const id = await getIDfromLink(path);

  fbdollowFormData.append('id', id);
  try {
    const res = await axios.post(`${apiUrlFB}/follow`, fbdollowFormData, {
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

const postFBLike = async (memoryCode, path, quantity, selectedAlbum, selectedSpeed) => {
  const formDataFBLike = new FormData();
  formDataFBLike.append('memoryCode', memoryCode);
  formDataFBLike.append('quantity', quantity);
  formDataFBLike.append('selectedAlbum', selectedAlbum);
  formDataFBLike.append('selectedSpeed', selectedSpeed);
  console.log("iss ok 1");
  const id = await getIDfromLink(path);
  formDataFBLike.append('id', id);
  try {
    const res = await axios.post(`${apiUrlFB}/like`, formDataFBLike, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log("checkDay", getDay());

    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }

}

const postFBLikePage = async (memoryCode, path, quantity) => {
  const formdataFBLikePage = new FormData();
  formdataFBLikePage.append('memoryCode', memoryCode);
  formdataFBLikePage.append('quantity', quantity);


  const id = await getIDfromLink(path);

  formdataFBLikePage.append('id', id);
  try {
    const res = await axios.post(`${apiUrlFB}//like-page`, formdataFBLikePage, {
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

const postFBLikeTym = async (memoryCode, path, quantity, selectedAlbum, selectedSpeed) => {
  const formdataFBLikeTym = new FormData();
  formdataFBLikeTym.append('memoryCode', memoryCode);
  formdataFBLikeTym.append('quantity', quantity);
  formdataFBLikeTym.append('selectedAlbum', selectedAlbum);
  formdataFBLikeTym.append('selectedSpeed', selectedSpeed);
  const id = await getIDfromLink(path);
  formdataFBLikeTym.append('id', id);
  try {
    const res = await axios.post(`${apiUrlFB}/like-tym`, formdataFBLikeTym, {
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

const postFBLikeTymCmt = async (memoryCode, path, quantity, selectedSpeed) => {
  const formDataLogin = new FormData();
  formDataLogin.append('memoryCode', memoryCode);
  formDataLogin.append('quantity', quantity);
  formDataLogin.append('selectedSpeed', selectedSpeed);
  const id = await getIDfromLink(path);
  formDataLogin.append('id', id);

  try {
    const res = await axios.post(`${apiUrlFB}/like-tym-cmt`, formDataLogin, {
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
const postFBLikeVip = async (memoryCode, path, quantity, selectedLike, selectedDay, selectedSpeed) => {
  const formDataLogin = new FormData();
  formDataLogin.append('memoryCode', memoryCode);
  formDataLogin.append('quantity', quantity);
  formDataLogin.append('selectedLike', selectedLike);
  formDataLogin.append('selectedDay', selectedDay);
  formDataLogin.append('selectedSpeed', selectedSpeed);
  const id = await getIDfromLink(path);
  formDataLogin.append('id', id);

  try {
    const res = await axios.post(`${apiUrlFB}/like-vip`, formDataLogin, {
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
const postFBShareFake = async (memoryCode, path, quantity) => {
  const formDataLogin = new FormData();
  formDataLogin.append('memoryCode', memoryCode);
  formDataLogin.append('quantity', quantity);
  const id = await getIDfromLink(path);
  formDataLogin.append('id', id);

  try {
    const res = await axios.post(`${apiUrlFB}/share-fake`, formDataLogin, {
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
const postFBShareReal = async (memoryCode, path, quantity) => {
  const formDataLogin = new FormData();
  formDataLogin.append('memoryCode', memoryCode);
  formDataLogin.append('quantity', quantity);
  const id = await getIDfromLink(path);
  formDataLogin.append('id', id);

  try {
    const res = await axios.post(`${apiUrlFB}/share-real`, formDataLogin, {
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
const postFBViewStory = async (memoryCode, path, quantity) => {
  const formDataLogin = new FormData();
  formDataLogin.append('memoryCode', memoryCode);
  formDataLogin.append('quantity', quantity);
  const id = await getIDfromLink(path);
  formDataLogin.append('id', id);

  try {
    const res = await axios.post(`${apiUrlFB}/view-story`, formDataLogin, {
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

export {
  postFBCmt,
  postFBFollow,
  postFBLike,
  postFBLikePage,
  postFBLikeTym,
  postFBLikeTymCmt,
  postFBLikeVip,
  postFBShareFake,
  postFBShareReal,
  postFBViewStory,
};
