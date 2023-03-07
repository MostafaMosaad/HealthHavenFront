import { React } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import './SideBarDoctor.css';
import { DoctorItems } from './DoctorItem';

const SidebarDoc = () => {
   return (
<>
      <div id="realNavBarDoc">
         <ul >
            {DoctorItems.map((item, index) => {
               return (
                  <li key={index} className=" text-white my-3" id="listitemsDoc">
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
export default SidebarDoc;
