import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authLogin } from "../../redux/authSlice";
import { getUsers, updateProfileUsers } from "../../redux/userSlice";
import upLoadImage from "../../service/uploadImages";
import "./Profile.scss";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.auth);
  const users = useSelector((state) => state.users.users);
  const [name, setName] = useState(auth.name);
  const [phone, setPhone] = useState(auth.phone);
  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleUpdateProfile = async () => {
    const resImageUrl = await upLoadImage(image);
    let imageUrl = [
      `//images.weserv.nl?url=http://103.237.147.34:8888${resImageUrl}`,
    ];
    let newU = {
      id: auth.id,
      avatar: imageUrl,
      name: name,
      email: auth.email,
      phone: phone,
      roles: auth.roles,
      //   address: address,
    };
    localStorage.setItem("auth", JSON.stringify(newU));
    dispatch(authLogin(newU));
    dispatch(updateProfileUsers(newU));
    toast.success("Sửa user thành công", {
      position: toast.POSITION.TOP_CENTER,
    });
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };

  console.log(auth);
  console.log(users);

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="fs-4 mb-5">Hồ sơ cá nhân</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="bg-light p-4">
              <div className="mb-3">
                <label className="form-label">Avatar</label>
                <div className="avatar-preview mb-3 rounded">
                  <img
                    src={image ? URL.createObjectURL(image) : auth.avatar}
                    alt={auth.name}
                    id="avatar-preview"
                    className="rounded"
                  />
                  <label htmlFor="file">
                    <span className="image-upload">
                      <i class="fa-solid fa-upload"></i>
                      <p>Thay ảnh đại diện</p>
                    </span>
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="col-form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Email</label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  defaultValue={auth.email}
                  disabled
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Phone</label>
                <input
                  type="text"
                  id="phone"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="text-center mt-3">
              <button
                className="btn btn-primary"
                id="btn-save"
                onClick={handleUpdateProfile}
              >
                Cập nhật thông tin
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
