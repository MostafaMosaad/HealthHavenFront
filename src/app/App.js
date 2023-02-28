import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react'
import Main from '../components/main/main';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from '../components/login/login';
import SignUpDoc from '../components/signUpDoc/signUpDoc';
import SignUpUser from '../components/signUpUser/signUpUser';
import HomeUser from '../components/home/user/homeUser';
import Header from './../components/header/header';
import Footer from '../components/Footer/Footer';
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signupDoctor' element={<SignUpDoc/>}></Route>
        <Route path='/signupUser' element={<SignUpUser></SignUpUser>}></Route>
        <Route path='/homeUser' element={<HomeUser/>}></Route>
      </Routes>
       <Footer></Footer>
      </BrowserRouter>
    </div>
 
 
  );
}

export default App;
