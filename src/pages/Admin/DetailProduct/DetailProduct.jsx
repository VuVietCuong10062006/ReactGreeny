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
      `http://103.237.147.34:8888${resImageUrl}`,
      `http://103.237.147.34:8888${resImageUrl}`,
      `http://103.237.147.34:8888${resImageUrl}`,
      `http://103.237.147.34:8888${resImageUrl}`,
      `http://103.237.147.34:8888${resImageUrl}`,
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
    toast.success("S???a s???n ph???m th??nh c??ng",{
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
        <div className="top">S???a th??ng tin ph???m</div>
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
                <label>T??n</label>
                <input
                  type="text"
                  placeholder="Cam"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Gi?? th??nh</label>
                <input
                  type="text"
                  placeholder="10000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Th??? lo???i</label>
                <input
                  type="text"
                  placeholder="qua"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Tr???ng th??i</label>
                <input
                  type="text"
                  placeholder="Sale"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>S??? sao</label>
                <input
                  type="text"
                  placeholder="1"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
              <button onClick={handleUpdate}>S???a s???n ph???m</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
