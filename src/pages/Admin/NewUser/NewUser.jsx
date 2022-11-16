// import "./Newproduct.scss";
import Sidebar from "../ComponentAdmin/Sidebar/Sidebar";
import Navbar from "../ComponentAdmin/Navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { useNavigate } from "react-router-dom";
import upLoadImage from "../../../service/uploadImages";
import { useDispatch } from "react-redux";
import { addUsers } from "../../../redux/userSlice";

const NewUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleAddUser = async () => {
    const resImageUrl = await upLoadImage(image);
    let imageUrl = [`http://103.237.147.34:8888${resImageUrl}`];

    let newU = {
      avatar: imageUrl,
      name: name,
      email: email,
      phone: phone,
      password: password,
      // address: address,
    };
    dispatch(addUsers(newU));
    toast.success("Thêm user thành công", {
      position: toast.POSITION.TOP_CENTER,
    });
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">{/* <h1>{title}</h1> */}</div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              <div className="formInput">
                <label>Tên</label>
                <input
                  type="text"
                  placeholder="Vũ Việt Cường"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="vuvietcuong@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Số điện thoại</label>
                <input
                  type="text"
                  placeholder="0336294777"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Địa chỉ</label>
                <input
                  type="text"
                  placeholder="Ha noi"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <button onClick={handleAddUser}>Thêm user</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUsers;
