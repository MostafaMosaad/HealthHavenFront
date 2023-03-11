import Card from 'react-bootstrap/Card';
import './SignUp.css'
import { Link } from 'react-router-dom';
import Footer from './../Footer/Footer';
function SignUp() {
  return (
    <>
    <div className='signUpCards'>
        {/* normal User card  */}
        <Card style={{ width: '18rem' }} className ="fullCard">
      <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Imges/NormalUser.png"}  />
      <Card.Body>
        <Card.Title>User Sign up</Card.Title>
        <Card.Text>
        <Link to ='/signupUser'><button   className='cardbtnboth' variant="contained">Join Us</button></Link>
        </Card.Text>
      </Card.Body>
      <Card.Body>
      </Card.Body>
    </Card>
    {/* Doctor card  */}
    <Card style={{ width: '18rem' }} className ="fullCard">
      <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Imges/DoctorCard.png"}  />
      <Card.Body>
        <Card.Title>Doctor Sign up</Card.Title>
        <Card.Text> 
         <Link to ='/signupDoctor'><button className='cardbtnboth'  variant="contained">Join Us</button> </Link>
        </Card.Text>
      </Card.Body>
      <Card.Body>
      </Card.Body>
    </Card>
    </div>
  {/* <Footer></Footer> */}
    </>
  );
}

export default SignUp;