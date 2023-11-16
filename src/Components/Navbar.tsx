import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
const Navbar = () => {
  const [searchParams]= useSearchParams();
  const todosdata=searchParams.get("todos");
  return (
    <>
    <nav className="d-flex navbar mt-4">
     <Link to="/" className={todosdata===null ? "active" : ""} style={{textDecoration:"none"}}><h2>All</h2></Link>
      <Link to="/?todos=active" className={todosdata==="active" ? "active" : ""} style={{textDecoration:"none"}}><h2>Active</h2></Link>
      <Link to="/?todos=completed" className={todosdata==="completed" ? "active" : ""}style={{textDecoration:"none"}}><h2>Completed</h2></Link>
    </nav>
    <hr></hr>
    </>
  )
}

export default Navbar
