import { NavLink as NavLinkComp} from "react-router-dom";

function Navlink({ to, children, ...props }) {
  return <div>
    <NavLinkComp {...props}
    to={to}
    style={({ isActive })=> { 
      return {
        fontWeight: isActive ? 'bold' : '',
        color: isActive ? 'red' : 'black'
      }
    }}
    >
      {children}
    </NavLinkComp>  
  </div>
}

export default Navlink;
