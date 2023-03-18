import React from 'react';
import DoctorForm from '../../../components/home/ProfileDoctor/Doctorform';


const DoctorProfilePage = () => {
    return (
        <>
 
        <div className='d-flex justify-content-evenly flex-wrap'>
            {/* <div  className=' col-xxl-3 col-xl-3  col-lg-3 col-md-8  col-sm-10 col-10 mx-5'><SidebarDoc/></div> */}
            <div className="  col-xxl-5 col-xl-5   col-lg-5 col-md-8  col-sm-10 col-10 my-5" ><DoctorForm/></div>
        </div>
        </>
    );
};

export default DoctorProfilePage;