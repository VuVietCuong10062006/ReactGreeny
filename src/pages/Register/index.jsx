import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Register.css";
// import Context from "../../context/Context";
// import { addUser } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, getUsers } from "../../redux/userSlice";
import productApi from "../../api/productApi";


const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  
  const [userName, setUserName] = useState("");
  const [userPassWord, setUserPassWord] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userCfPassword, setUserCfPassword] = useState("");
  const [messageName, setMessageName] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  const [messagePassword, setMessagePassword] = useState("");
  const [messageCfPassword, setMessageCfPassword] = useState("");

  // const { user, dispatchUser } = useContext(Context);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleRegister = () => {
    setMessageName("");
    setMessageEmail("");
    setMessagePassword("");
    setMessageCfPassword("");
    let isValid = checkValidate();
    if (!isValid) return;

    let isExistUser = users.some((u) => u.email === userEmail);
    if (isExistUser) {
      return;
    }
    let newUser = {
      name: userName,
      email: userEmail,
      phone: "",
      avatar:
        "https://media.techmaster.vn/api/static/crop/bv9jp4k51co7nj2mhht0",
      password: userPassWord,
    };
    dispatch(addUsers(newUser));
    navigate("/login")
    console.log("dk thanh cong", newUser);
  };

  const checkValidate = () => {
    let isCheck = true;
    if (!userName) {
      setMessageName("tên không được để chống");
      isCheck = false;
    }

    if (!userEmail) {
      setMessageEmail("email không được để chống");
      isCheck = false;
    } else if (!validateEmail(userEmail)) {
      setMessageEmail("email không đúng định dạng");
      isCheck = false;
    }

    if (!userPassWord) {
      setMessagePassword("passWord không được để chống");
      isCheck = false;
    }

    if (!userCfPassword) {
      setMessageCfPassword("cfPassWord không được để chống");
      isCheck = false;
    } else if (userCfPassword !== userPassWord) {
      setMessageCfPassword("cfPassWord không chính xác");
      isCheck = false;
    }

    return isCheck;
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <>
      <div className="register">
        <div className="register-form">
          <h2>Đăng Kí</h2>
          <div className="input-row">
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Họ tên"
              id="username"
            />
            {messageName && <small>{messageName}</small>}
          </div>
          <div className="input-row">
            <input
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              type="text"
              placeholder="Email"
              id="email"
            />
            {messageEmail && <small>{messageEmail}</small>}
          </div>
          <div className="input-row">
            <input
              value={userPassWord}
              onChange={(e) => setUserPassWord(e.target.value)}
              type="Email"
              placeholder="Mật khẩu"
              id="passwork"
            />
            {messagePassword && <small>{messagePassword}</small>}
          </div>
          <div className="input-row">
            <input
              value={userCfPassword}
              onChange={(e) => setUserCfPassword(e.target.value)}
              type="Email"
              placeholder="Nhập lại mật khẩu"
              id="cf-passwork"
            />
            {messageCfPassword && <small>{messageCfPassword}</small>}
          </div>
          <div className="input-row">
            <button onClick={handleRegister} className="btn" id="btn-register">
              ĐĂNG KÝ
            </button>
          </div>
          <p>
            <span>Bạn đã có tài khoản?</span>
            <Link to="/login">Đăng nhập</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
