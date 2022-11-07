// Imports
import './styles.css';

// Components
const Sidebar = () => {
    return(
        <div className="sidebar">
            <ul className='sidebarUl px-5 text-left'>
                
                <li className='sidebarUlLi'>Servicios</li>
                <li className='sidebarUlLi'>Información</li>
            </ul>
        </div>
    );
}

// Exports
export default Sidebar;