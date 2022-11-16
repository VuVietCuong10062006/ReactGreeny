// import "./Newproduct.scss";
import Sidebar from "../ComponentAdmin/Sidebar/Sidebar";
import Navbar from "../ComponentAdmin/Navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import upLoadImage from "../../../service/uploadImages";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../../../redux/userSlice";
import {
  addProduct,
  getProduct,
  getProductbyId,
  updateProduct,
} from "../../../redux/productsSlice";
import { isEmpty } from "../../../utils/utils";

const DetailProduct = () => {
    const navigate = useNavigate()
  const { productId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const getProductId = useSelector((state) => state.products.productId)

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() =>{
    dispatch(getProductbyId(productId))
  },[])

  console.log(getProductId)

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [rating, setRating] = useState("");

  const handleUpdate = async () => {
    const resImageUrl = await upLoadImage(image);
    let imageUrl = [
      `//images.weserv.nl?url=http://103.237.147.34:8888${resImageUrl}`,
      `//images.weserv.nl?url=http://103.237.147.34:8888${resImageUrl}`,
      `//images.weserv.nl?url=http://103.237.147.34:8888${resImageUrl}`,
      `//images.weserv.nl?url=http://103.237.147.34:8888${resImageUrl}`,
      `//images.weserv.nl?url=http://103.237.147.34:8888${resImageUrl}`,
    ];

    let newP = {
      id: productId,
      images: imageUrl,
      name: name,
      price: price,
      category: category,
      tag: tag,
      rating: rating,
      description: "description",
      voted: 10,
    };
    dispatch(updateProduct(newP));
    toast.success("Sửa sản phẩm thành công",{
        position: toast.POSITION.TOP_CENTER
    })
    setTimeout(() =>{
        navigate(-1);
    },1000)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if(isEmpty(getProductId)){
    return
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">Sửa thông tin phẩm</div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : getProductId.images[0]
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
              <button onClick={handleUpdate}>Sửa sản phẩm</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
