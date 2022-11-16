import "./Newproduct.scss";
import Sidebar from "../ComponentAdmin/Sidebar/Sidebar";
import Navbar from "../ComponentAdmin/Navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import upLoadImage from "../../../service/uploadImages";
import { useDispatch } from "react-redux";
import { addUsers } from "../../../redux/userSlice";
import { addProduct } from "../../../redux/productsSlice";

const NewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [rating, setRating] = useState("");

  const handleAddUser = async () => {
    const resImageUrl = await upLoadImage(image);
    let imageUrl = [
      `http://103.237.147.34:8888${resImageUrl}`,
      `http://103.237.147.34:8888${resImageUrl}`,
      `http://103.237.147.34:8888${resImageUrl}`,
      `http://103.237.147.34:8888${resImageUrl}`,
      `http://103.237.147.34:8888${resImageUrl}`,
    ];

    let newP = {
      images: imageUrl,
      name: name,
      price: price,
      category: category,
      tag: tag,
      rating: rating,
      description: "description",
      voted: 10,
    };
    dispatch(addProduct(newP));
    toast.success("Thêm sản phẩm thành công", {
      position: toast.POSITION.TOP_CENTER,
    });
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
        <div className="top">Thêm sản phẩm</div>
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
                  placeholder="Cam"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Giá thành</label>
                <input
                  type="text"
                  placeholder="10000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Thể loại</label>
                <input
                  type="text"
                  placeholder="qua"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Trạng thái</label>
                <input
                  type="text"
                  placeholder="Sale"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Số sao</label>
                <input
                  type="text"
                  placeholder="1"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
              <button onClick={handleAddUser}>Thêm sản phẩm</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
