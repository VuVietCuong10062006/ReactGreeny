import axios from "axios";

function upLoadImage(file) {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append("file", file);
    axios({
      method: "post",
      url: "http://103.237.147.34:8888/api/v1/users/1/files",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    })
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default upLoadImage;
