import { Link } from "react-router-dom";
import NavLink from './Navlink'
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  // console.log(navigate);
  return (
    <div>
      <h1>Bienvenidos</h1>
      <NavLink to='/about'><h6>About</h6></NavLink> 
      <NavLink to='/gallery'><h6>Gallery</h6></NavLink>
      <NavLink to='/contact'><h6>Contact</h6></NavLink>
    </div>
  );
}

export default Home;
