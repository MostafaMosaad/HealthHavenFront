import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import style from './cont.module.css';
import { useTranslation } from 'react-i18next';

export default function ContactUs() {

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const { t } = useTranslation();
  const handleSubmit = (event) => {
    event.preventDefault();
  };


  const handleEmail = () => {
   
    const subject = 'Contact Us';
    const body = `Name: ${name}%0D%0AMobile: ${mobile}%0D%0AEmail: ${email}%0D%0AComments: ${comments}`;
    window.location.href = `mailto:HealthHavenTeam@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
<>
<Container>
  <Row style={{paddingTop:"7rem"}}>
    {/* English */}
    <Col xs={12} md={6}  style={{marginTop:"4rem"}}>
      <div className=" card shadow-sm " >
        <h2>{t("Contact")}</h2>
        <Form className='w-75' onSubmit={handleSubmit} style={{margin:"0 auto"}}>
          <Form.Group controlId="formName">
            <Form.Label>{t("yourName")}</Form.Label>
            <Form.Control type="text" placeholder={t("enterYourName")} required onChange={(e) => setName(e.target.value)}/>
          </Form.Group>
          <Form.Group controlId="formMobile">
            <Form.Label>{t("mobileNumber")}</Form.Label>
            <Form.Control type="tel" placeholder={t("enterMobileNumber")} required onChange={(e) => setMobile(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>{t("emailAddress")}</Form.Label>
            <Form.Control type="email" placeholder={t("enterEmailAddress")} required onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formComments">
            <Form.Label>{t("comments")}</Form.Label>
            <Form.Control className={style['textarea.form-control ']} rows={4} placeholder={t("enterComments")} required onChange={(e) => setComments(e.target.value)} />
          </Form.Group>
          <Button variant="outline-primary mt-3" onClick={handleEmail}>
            {t("send")}
          </Button>
        </Form>
      </div>
    </Col>
    {/* Arabic */}
    <Col xs={12} md={6}>
      <div className="card shadow-sm" style={{ marginTop:"4rem" }}>
        <h2>{t("callUs")}</h2>
        <p>{t("phone")}: {t("phoneNum")}</p>
        <Button variant="outline-primary" href="tel:123-456-7890">
          {t("callNow")}
        </Button>
        <h3 className='mt-4'>{t("address")}</h3>
        <p>{t("besideCairoUni")}<br/>
        {t("gizaGovernorate")}
        </p>
            

            <iframe 
              title="map"
              width="100%"
              height="400"
              style={{ border: 0 ,height:"250px"}}
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDf0hZB1VECh8KYwvsFHCRRB2ZTqB6F8XU&q=30.0284408,31.201699`}
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
</>
);
}