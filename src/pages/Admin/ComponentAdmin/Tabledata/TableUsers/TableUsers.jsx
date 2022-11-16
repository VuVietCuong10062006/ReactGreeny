import "../Table.scss";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteUsers, getUsers } from "../../../../../redux/userSlice";

const TableUsers = () => {
  const dispatch = useDispatch();
  const dataUsers = useSelector((state) => state.users.users);
  console.log(dataUsers);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteUsers(id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Tên", width: 250 },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "avt",
      headerName: "Ảnh",
      width: 150,
      renderCell: (param) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={param.row.avatar} alt="avatar" />
          </div>
        );
      },
    },
    {
      field: "phone",
      headerName: "Số điện thoại",
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
            <Link to={`/admin/users/${params.id}`} style={{ textDecoration: "none" }}>
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
        User
        <Link to="/admin/users/new" className="link">
          Thêm user
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={dataUsers}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default TableUsers;
