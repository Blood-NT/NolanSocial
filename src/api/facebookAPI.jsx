import axios from "axios";
import { format } from 'date-fns';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { id } from "date-fns/locale";


// import { get } from "react-native/libraries/turbomodule/turbomoduleregistry";



const getIDAPI = "https://id.traodoisub.com/api.php"

const apiUrlFB = "http://192.168.1.54:8083/facebook";

const user = "admin";

const getDay = () => {
  const now = new Date();
  const formattedTime = format(now, 'yyyy-M-d H:m:s');
  return formattedTime;
}
const getIDfromLink = async (link) => {
  const idformdata = new FormData();
  idformdata.append('link', link);
  try {
    const idres = await axios.post(getIDAPI, idformdata,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return idres.data.id;
  } catch (error) {
    console.log(`${error}`);
  }
}
const postFBCmt = async (path, quantity, multiLineText) => {
  const getid = await getIDfromLink(path);
  const date = getDay();
  const dataSend =
  {
    id: getid,
    sl: quantity,
    noidung: multiLineText,
    dateTime: date,
    uid: user,
  }
  console.log("url", `${apiUrlFB}/cmt`);
  console.log("id", getid);
  try {
    const res = await axios.post(`${apiUrlFB}/cmt`, dataSend, {
      headers: {
        access_token: "accessToken"
      },
    });
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};
const postFBFollow = async (path, quantity) => {
  const id = await getIDfromLink(path);
  const date = getDay();
  const datasend = {
    id: id,
    sl: quantity,
    dateTime: date,
    uid: user,
  }
  try {
    const res = await axios.post(`${apiUrlFB}/follow`, datasend, {
      headers: {
        //        access_token: "accessToken"

        // access_token: localStorage.getItem("accessToken") 
        access_token: "accessToken"
      },
    });
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

const postFBLike = async (path, quantity, selectedAlbum, selectedSpeed) => {
  const id = await getIDfromLink(path);
  const date = getDay();
  const datasend = {
    id: id,
    sl: quantity,
    is_album: selectedAlbum,
    speed: selectedSpeed,
    dateTime: date,
    uid: user,
  }
  try {
    const res = await axios.post(`${apiUrlFB}/like`, datasend, {
      headers: {
        access_token: "accessToken"
      },
    });
    console.log("checkDay", getDay());

    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }

}

const postFBLikePage = async (path, quantity) => {
  const id = await getIDfromLink(path);
  const date = getDay();
  const datasend = {
    id: id,
    sl: quantity,
    dateTime: date,
    uid: user,
  }
  try {
    const res = await axios.post(`${apiUrlFB}//like-page`, datasend, {
      headers: {
        access_token: "accessToken"
      },
    });
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

const postFBLikeTym = async (path, quantity, selectedAlbum, selectedSpeed) => {
  const id = await getIDfromLink(path);
  const date = getDay();
  const datasend = {
    id: id,
    sl: quantity,
    dateTime: date,
    loaicx: selectedAlbum,
    speed: selectedSpeed,
    uid: user,
  }
  try {
    const res = await axios.post(`${apiUrlFB}/like-tym`, datasend, {
      headers: {
        access_token: "accessToken"
      },
    });
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};

const postFBLikeTymCmt = async (path, quantity, selectedSpeed) => {
  const id = await getIDfromLink(path);
  const date = getDay();
  const datasend = {
    id: id,
    sl: quantity,
    loaicx: selectedSpeed,
    dateTime: date,
    uid: user,
  }
  try {
    const res = await axios.post(`${apiUrlFB}/like-tym-cmt`, datasend, {
      headers: {
        access_token: "accessToken"
      },
    });
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};
const postFBLikeVip = async (path, selectServer, selectday, selectquantify, selectPost) => {
  const date = getDay();
  const id = await getIDfromLink(path);
  const datasend = {
    id: id,
    server: selectServer,
    time_pack: selectday,
    packer: selectquantify,
    post: selectPost,
    dateTime: date,
    uid: user,
  }
  try {
    const res = await axios.post(`${apiUrlFB}/like-vip`, datasend, {
      headers: {
        access_token: "accessToken"
      },
    });
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};
const postFBShareFake = async (memoryCode, path, quantity) => {
  const date = getDay();
  const id = await getIDfromLink(path);
  const datasend = {
    id: id,
    sl: quantity,
    dateTime: date,
    uid: user,
  }
  try {
    const res = await axios.post(`${apiUrlFB}/share-fake`, datasend, {
      headers: {
        access_token: "accessToken"
      },
    });
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};
const postFBShareReal = async (memoryCode, path, quantity) => {
  const date = getDay();
  const id = await getIDfromLink(path);
  const datasend = {
    id: id,
    sl: quantity,
    dateTime: date,
    uid: user,
  }
  try {
    const res = await axios.post(`${apiUrlFB}/share-real`, datasend, {
      headers: {
        access_token: "accessToken"
      },
    });
    return res.data;
  } catch (error) {
    console.log(`${error}`);
  }
};
const postFBViewStory = async (memoryCode, path, quantity) => {
  const date = getDay();
  const id = await getIDfromLink(path);

  const datasend = {
    id: id,
    sl: quantity,
    dateTime: date,
    uid: user,
  }
  try {
    const res = await axios.post(`${apiUrlFB}/view-story`, datasend, {
      headers: {
        access_token: "accessToken"
      },
    });
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
