import React from 'react';
import Bookings from '../../../components/home/profileUser/Bookings';


const MyBookings = () => {
    return (
        <>
        <div className='d-flex justify-content-evenly flex-wrap'>
            {/* <div  className=' col-xxl-3 col-xl-3  col-lg-3 col-md-8  col-sm-10 col-10 mx-5'><Sidebar></Sidebar></div> */}
            {/* <div className=" col-xxl-5 col-xl-5   col-lg-5 col-md-11  col-sm-10 col-10" > </div> */}
            <div className="d-flex flex-wrap my-5 justify-content-center mt-5" id ="myPro"><Bookings></Bookings></div>    
                </div>
        
        </>
    );
};

export default MyBookings;