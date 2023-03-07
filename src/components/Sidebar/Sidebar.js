import { React } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { SideBarItems } from './SidebarItems';
import { Link ,Routes,Route} from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
   return (
<>
      <div id="realNavBar">
         <ul >
            {SideBarItems.map((item, index) => {
               return (
                  <li key={index} className=" text-white my-3" id="listitems">
                     <Link to={item.url} className='nav-link' aria-current='page'>
                        <i className={item.icon}></i>
                        <span>  {item.title}</span>
                     </Link>
                  </li>
               );
            })}

         </ul>
      </div>
      </>
   )

}
export default Sidebar;
