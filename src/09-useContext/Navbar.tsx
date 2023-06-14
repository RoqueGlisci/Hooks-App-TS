import {Link, NavLink} from 'react-router-dom';
//el link, NavLink es un high order component de react router

export const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg bg-secondary-subtle rounded-3">
            <div className="container-fluid">

            <Link className="navbar-brand" to="#">useContext</Link>

            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav ">

                    <NavLink 
                        className={({isActive}) => `nav-link ${isActive ? 'active' : ' '}`} //si esta en true aplica el 'active' que es de bootstrap para resaltar palabals en el menu
                        to="/">
                        Home
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-link ${isActive ? 'active' : ' '}`}//si esta en true aplica el 'active' que es de bootstrap para resaltar palabals en el menu
                        to="/about">
                        About
                    </NavLink>
                    
                    <NavLink 
                        className={({isActive}) => `nav-link ${isActive ? 'active' : ' '}`}//si esta en true aplica el 'active' que es de bootstrap para resaltar palabals en el menu
                        to="/login">
                        Login
                    </NavLink>
                    
                </ul>
            </div>
            </div>
        </nav>
  )
}
