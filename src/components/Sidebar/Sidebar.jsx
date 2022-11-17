// Imports
import { NavLink } from 'react-router-dom';
import './styles.css';

// Components
const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className='sidebarUl px-5 text-left'>
                <li className='sidebarUlLi'>
                    <NavLink to='/'>Servicios</NavLink>
                </li>
                <li className='sidebarUlLi' >
                    <NavLink to='/information'>Información</NavLink>
                </li>
            </ul>
        </div>
    );
}

// Exports
export default Sidebar;