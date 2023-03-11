import React from 'react';
import MyProfile from '../../../components/home/profileUser/userForm';


const MyProfilePage = () => {
    return (
        <>
           <div className='d-flex  flex-wrap justify-content-evenly'>
            {/* <div  className=' col-xxl-3 col-xl-3  col-lg-3 col-md-8  col-sm-10 col-10 '><Sidebar></Sidebar></div> */}
            <div className="  col-xxl-5 col-xl-5   col-lg-5 col-md-8  col-sm-10 col-10 my-5 " ><MyProfile></MyProfile></div>
        </div> 
        </>
    );
};

export default MyProfilePage;