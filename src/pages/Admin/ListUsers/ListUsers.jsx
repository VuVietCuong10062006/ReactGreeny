import "./ListUsers.scss"
import Sidebar from "../ComponentAdmin/Sidebar/Sidebar"
import Navbar from "../ComponentAdmin/Navbar/Navbar"
import TableUsers from "../ComponentAdmin/Tabledata/TableUsers/TableUsers"

const ListUsers = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <TableUsers/>
      </div>
    </div>
  )
}

export default ListUsers