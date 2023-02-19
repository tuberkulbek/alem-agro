import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <div className="header">
            <NavLink to={`/profile`} className='link'>Profile</NavLink>
            <NavLink to={`/`} className='link'>Catalog</NavLink>
        </div>
    )
}

export default Header;