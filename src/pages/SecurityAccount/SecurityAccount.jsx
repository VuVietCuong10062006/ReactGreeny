import "./SecurityAccount.scss"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authLogin } from "../../redux/authSlice";
import { updateProfileUsers } from "../../redux/userSlice";

const SecurityAccount = () => {
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdatePassword = () => {
    if (password !== auth.password) {
      toast.error("Mật khẩu cũ không chính xác",{
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (password === newPassword) {
      toast.error("Mật khẩu cũ và mới không được trùng nhau",{
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Mật khẩu mới và xác nhận không trùng nhau",{
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    let newU = {
      id: auth.id,
      password: newPassword,
      avatar: auth.avatar,
      name: auth.name,
      email: auth.email,
      phone: auth.phone,
      roles: auth.roles,
      //   address: address,
    };

    localStorage.setItem("auth", JSON.stringify(newU));
    dispatch(updateProfileUsers(newU));
    dispatch(authLogin(newU));
    toast.success("Cập nhật password thành công", {
      position: toast.POSITION.TOP_CENTER,
    });

    setTimeout(() => {
      navigate(-1);
    }, 1000);
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="fs-4 mb-5">Bảo mật tài khoản</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="bg-light p-4">
              <div className="mb-3">
                <label className="col-form-label">Mật khẩu cũ</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Mật khẩu mới</label>
                <input
                  type="password"
                  className="form-control"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">
                  Xác nhận lại mật khẩu mới
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="text-center mt-3">
              <button
                className="btn btn-primary"
                id="btn-save"
                onClick={handleUpdatePassword}
              >
                Cập nhật mật khẩu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityAccount;
