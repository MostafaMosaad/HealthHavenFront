import axios from "axios";
import React, { useEffect, useState, } from "react";
import { Button, Card } from "react-bootstrap";
import { BiShow } from "react-icons/bi";
import TextField  from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

function PatientData() {
  const [token] = useState(localStorage.getItem("userToken"));
  const [medicalData, setMedicalData] = useState('');
  const nav=useNavigate()
  const API_URL = "http://localhost:3000/api/doctors/getMe";
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(result.data.data.doctor);
      //   console.log(result.data.data.doctor.appointments.medical
      //     )
    };
    fetchData();
  }, [token]);

  if (!data) {
    return <div>Loading user details...</div>;
  }
  const userHistory = data.appointments;
  return (
    <>
        {[...Array(12)].map((_, index) => (
        <br key={index} />
      ))}
      {
      userHistory?.map((doctor) => (

        <Card
          style={{
            width: "24rem",
            backgroundColor: "rgb(238, 242, 242)",
            borderColor: "#24326c",
            borderRadius: "20px",
            marginLeft: "1rem",
            marginBottom: "1rem",
          }}
          id="DocsCard"
        >
          <Card.Body key={doctor.id}>
            <Card.Title> Name :{doctor.user}</Card.Title>

            { 
                doctor.medical?.map((z,index)=>{
                  return(
                       z?.map((x, index) => {
                        return <Card.Title> {index+1} : {x} </Card.Title>;
                      })
                  )                 
                  })
}
<Button onClick={()=>
{
   nav(`/updatehistorybydoc/${doctor.id}`)
}
}
> 
  Update
</Button>

          </Card.Body>
        </Card>
      ))}
    </>
  );
}
export default PatientData;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Card } from "react-bootstrap";
// import { Button } from 'react-bootstrap';
// import History from './../../pages/UserPages/MedicalHistory/MedicalHistoryPage';

// function PatientHistory() {
//   const [token] = useState(localStorage.getItem("userToken"));

//   const API_URL = "http://localhost:3000/api/doctors/getMe";

//   const [data, setData] = useState({});
//   const [medical, setmedical] = useState({});

//   useEffect(() => {
//       const fetchData = async () => {
//           const result = await axios.get(API_URL, {
//               headers: { Authorization: `Bearer ${token}` },
//             });
//             setData(result.data.data.doctor);
//           };
//           // console.log(data)

//         fetchData();

//     }, [token]);
//                 if (!data) {
//                     return <div>Loading user details...</div>;
//                 }
//                 const userHistory = data.appointments;
//   return (
//     <>

//     <Button onClick={
//       () => {
//            let History ;
//                 userHistory?.map((doc) =>
//                 {
//                   let Api=`http://localhost:3000/api/users/${doc.id}`
//                   console.log(Api)
//                 const fetchData2 = async () => {
//                  let results = await axios.get(Api,
//                 {
//                   headers: { Authorization: `Bearer ${token}` }});
//                   setmedical(results.data.data.user);
//                   console.log(results.data.data.user)

//                   History =results.data.data.user.medicalHistory;
//                 }
//                 fetchData2()
//                 History?.map((H)=>
//               {
//                 console.log(H[0])
//               })

//               }

//                 )

//               }
//             }

//             >
//           Medical History </Button>

//     </>
//   );
// }
// export default PatientHistory;
// userHistory?.map((doctor) => (
//   result =  axios.get(`http://localhost:3000/api/users/${doctor.id}`,
//   {
//   headers: { Authorization: `Bearer ${token}` }});
// // setmedical(result.data.data.user);
// ))
