import "./ListProducts.scss"
import Sidebar from "../../Admin/ComponentAdmin/Sidebar/Sidebar"
import Navbar from "../../Admin/ComponentAdmin/Navbar/Navbar"
import TableProducts from "../ComponentAdmin/Tabledata/TableProducts/TableProducts"

const ListProducts = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <TableProducts/>
      </div>
    </div>
  )
}

export default ListProducts