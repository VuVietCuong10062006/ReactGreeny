// import "./Newproduct.scss";
import Sidebar from "../ComponentAdmin/Sidebar/Sidebar";
import Navbar from "../ComponentAdmin/Navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import upLoadImage from "../../../service/uploadImages";
import { useDispatch, useSelector } from "react-redux";
import {
  addUsers,
  getUsers,
  getUsersbyId,
  updateUsers,
} from "../../../redux/userSlice";
import { toast, ToastContainer } from "react-toastify";


const DetailUser = () => {
    const navigate = useNavigate()
  const { userId } = useParams();
  const dispatch = useDispatch();
  const getUserId = useSelector((state) => state.users.usersId);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUsersbyId(userId));
  }, []);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  console.log(users);

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleUpdateUser = async () => {
    const resImageUrl = await upLoadImage(image);
    let imageUrl = [`http://103.237.147.34:8888${resImageUrl}`];
    let newU = {
      ...getUserId,
      avatar: imageUrl,
      name: name,
      email: email,
      phone: phone,
      password: password,
      //   address: address,
    };
    dispatch(updateUsers(newU));
    toast.success("Sửa user thành công",{
        position: toast.POSITION.TOP_CENTER
    })
    setTimeout(() =>{
        navigate(-1);
    },1000)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">Sửa thông tin user</div>
        <div className="bottom">
          <div className="left">
            <img
              src={image ? URL.createObjectURL(image) : getUserId.avatar}
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
                  placeholder={getUserId.name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={getUserId.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Số điện thoại</label>
                <input
                  type="text"
                  placeholder={getUserId.phone}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Địa chỉ</label>
                <input
                  type="text"
                  placeholder="Hà Nội"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <button onClick={handleUpdateUser}>Sửa user</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
