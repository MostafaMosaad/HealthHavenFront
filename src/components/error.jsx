function ErrorMe() {
    return ( 
    <>
      <img src={process.env.PUBLIC_URL + "/Imges/Error.png"}  style={{  width:"60%", height:"20%",paddingTop:"5rem"}}/>
    </> );
}

export default ErrorMe;