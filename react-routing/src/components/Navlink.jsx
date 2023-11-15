import { NavLink as NavLinkComp} from "react-router-dom"

function NavLink({ to, children, ...props }) {
  return (
    <NavLinkComp 
    {...props}
    to={to}
    style={({ isActive })=> {
      return {
        fontWeight: isActive ? 'bold' : '',
        color: isActive ? 'red' : 'black'
      }
    } }
    >
      {children}
    </NavLinkComp>
  )
}
export default NavLink;