// Imports
import { NavLink } from 'react-router-dom';
import { AiFillSignal, AiFillQuestionCircle } from 'react-icons/ai';
import './styles.css';

// Components
const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className='sidebarUl text-left'>
                <NavLink to='/' className='sidebarNavLink'>
                    <li className='sidebarUlLi'>
                        <AiFillSignal color='black' size={30}/>
                        <p className='sidebarP'>Servicios</p>
                    </li>
                </NavLink>
                <NavLink to='/information' className='sidebarNavLink'>
                    <li className='sidebarUlLi' >
                        <AiFillQuestionCircle color="black" size={30}/>
                        <p className='sidebarP'>Información</p>
                    </li>
                </NavLink>
            </ul>
        </div>
    );
}

// Exports
export default Sidebar;