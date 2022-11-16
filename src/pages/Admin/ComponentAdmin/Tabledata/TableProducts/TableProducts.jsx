import "../Table.scss";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../../../../../redux/userSlice";
import { deleteProduct, getProduct } from "../../../../../redux/productsSlice";

const TableProducts = () => {
  const dispatch = useDispatch();
  const dataProducts = useSelector((state) => state.products.products);
  console.log(dataProducts);
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Tên", width: 250 },
    { field: "price", headerName: "Giá", width: 250 },
    {
      field: "avt",
      headerName: "Ảnh",
      width: 150,
      renderCell: (param) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={param.row.images[0]} alt="avatar" />
          </div>
        );
      },
    },
    {
      field: "category",
      headerName: "Thể loại",
      width: 200,
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/admin/products/${params.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">Xem</div>
            </Link>
            <div
              className="deleteButton"
                onClick={() => handleDelete(params.row.id)}
            >
              Xoá
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Products
        <Link to="/admin/products/new" className="link">
          Thêm sản phẩm
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={dataProducts}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default TableProducts;
