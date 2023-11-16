import { Link } from "react-router-dom";
import NavLink from "./components/Navlink";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  // console.log(navigate);
  return (
    <div>
      <h1>Bienvenidos</h1>
      <Link to='/about'><h6>About</h6></Link> 
      <Link to='/gallery'><h6>Gallery</h6></Link>
      <Link to='/contact'><h6>Contact</h6></Link>
    </div>
  );
}

export default Home;
