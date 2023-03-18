import { Card,Container, Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { VictoryBar, VictoryChart, VictoryAxis ,VictoryPie } from 'victory';
import { useTranslation } from 'react-i18next';

const Admin = () => {
    const { t } = useTranslation();
    const [numDoctors, setNumDoctors] = useState(0);
    const [numUsers, setNumUsers] = useState(0);
    const [numVerifiedDoctors, setNumVerifiedDoctors] = useState(0);
    const [numNotVerifiedDoctors, setNumNotVerifiedDoctors] = useState(0);
    const [numSkin, setNumSkin] = useState(0);
    const [numTeeth, setNumTeeth] = useState(0);
    const [numChild, setNumChild] = useState(0);
    const [numBones, setNumBones] = useState(0);
    const [numBN, setNumBN] = useState(0);
    const [numHeart, setNumHeart] = useState(0);
    const [numNut, setNumNut] = useState(0);


    const [numProf, setNumProfessor] = useState(0);
    const [numLec, setNumLecturer] = useState(0);
    const [numCons, setNumConsultant] = useState(0);
    const [numSpec, setNumSpecialist] = useState(0);

    const [activeSlice, setActiveSlice] =useState(null);

    const [token] = useState(localStorage.getItem("userToken"));
    const API_URL = "";
    const dataa = [
        { category: `${t("Skin")}`, value: numSkin },
        { category: `${t('Teeth')}`, value: numTeeth },
        { category: `${t('Child')}`, value: numChild },
        { category: `${t('Bones')}`, value: numBones },
        { category: `${t('Brain')}`, value: numBN },
        { category: `${t('Heart2')}`, value: numHeart },
        { category: `${t('Nutritionist2')}`, value: numNut },

      ];
      const data2 = [
        { x: `${t("Professor")}`, y: numProf },
        { x: `${t("Consultant")}`, y: numLec },
        { x: `${t("Lecturer")}`, y: numCons },
        { x: `${t("Specialist")}`, y: numSpec },
      ];
      
      
    useEffect(() => {
        const fetchUsers = async () => {
            const result = await axios.get(`${API_URL}/users/`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setNumUsers(result.data.results);
        };

        const fetchDoctors = async () => {
            const result = await axios.get(`${API_URL}/doctors/admindoc/`, { 
                headers: { Authorization: `Bearer ${token}` },
            });
            setNumDoctors(result.data.results);
            setNumVerifiedDoctors(result.data.data.doctors.filter((doc) => doc.isVerifired).length);
            setNumNotVerifiedDoctors(result.data.data.doctors.filter((doc) => !doc.isVerifired).length );
            setNumSkin(result.data.data.doctors.filter((doc) => doc.category=="Skin").length);
            setNumTeeth(result.data.data.doctors.filter((doc) => doc.category=="Teeth").length);
            setNumChild(result.data.data.doctors.filter((doc) => doc.category=="Child").length);
            setNumBones(result.data.data.doctors.filter((doc) => doc.category=="Bones").length);
            setNumBN(result.data.data.doctors.filter((doc) => doc.category=="Brain and Nerves").length);
            setNumHeart(result.data.data.doctors.filter((doc) => doc.category=="Heart").length);
            setNumNut(result.data.data.doctors.filter((doc) => doc.category=="Nutritionist").length);
            setNumProfessor(result.data.data.doctors.filter((doc) => doc.major=="Professor").length);
            setNumLecturer(result.data.data.doctors.filter((doc) => doc.major=="Lecturer").length);
            setNumConsultant(result.data.data.doctors.filter((doc) => doc.major=="Consultant").length);
            setNumSpecialist(result.data.data.doctors.filter((doc) => doc.major=="Specialist").length);


        };

        fetchUsers();
        fetchDoctors();
        
    }, [token]);

    const verifiedDoctorsPercent = (numVerifiedDoctors / numDoctors) * 100;
    const unverifiedDoctorsPercent = (numNotVerifiedDoctors / numDoctors) * 100;

    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

    <div className="admin-container">
        <Container>
            
            <div className="admin-title-box">
                <h1 className="admin-title mb-5 mt-2">{t('Admin Dashboard')}</h1>
            </div>
            <div className="admin-card-box">
               
                <Row>
                
                    <Col>
                        <Card className="admin-card mb-4 mt-2">
                            <Card.Body>
                                <Card.Title>{t('Total number of Doctors')}</Card.Title>
                                <Card.Text>{numDoctors}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card className="admin-card mb-4 mt-2">
                            <Card.Body>
                                <Card.Title>{t('Total number of Patients')}</Card.Title>
                                <Card.Text>{numUsers}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Card className="admin-card mt-2">
                            <Card.Body>
                                <Card.Title>{t('Number of verified doctors')}</Card.Title>
                                <Card.Text>{numVerifiedDoctors}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card className="admin-card  mt-2">
                            <Card.Body>
                                <Card.Title>{t('Number of not verified doctors')}</Card.Title>
                                <Card.Text>{numNotVerifiedDoctors}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                        <Col>
                            <h3>{t('Verified Doctors vs. Unverified Doctors')}</h3>
                            <div style={{ width: "50%", margin: "auto", display: "flex", justifyContent: "space-between" }}>
                                <div style={{ width: `${verifiedDoctorsPercent}%`, backgroundColor: "lime", height: "30px" }}></div>
                                <div style={{ width: `${unverifiedDoctorsPercent}%`, backgroundColor: "red", height: "30px" }}></div>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row><h3>{t('Doctors categories')}</h3></Row>
                <Row>
                <Col>
                    <VictoryChart domainPadding={30}>
      <VictoryAxis
        tickValues={dataa.map((d) => d.category)}
      />
      <VictoryAxis dependentAxis />
      <VictoryBar
        data={dataa}
        x="category"
        y="value"
        style={{
            data: {
                fill: '#24326c'  
                      }
          }}
      />
    </VictoryChart>
                    </Col>
                    <Col>
                <VictoryPie
      data={data2}
      x="x"
      y="y"
      style={{
        data: {
          fill: ({ datum }) => {
            switch(datum.x) {
              case 'Professor'||"دكتوراه":
                return 'green';
              case 'consultant'||"اخصائي":
                return 'yellow';
              case 'Lectruer'||"استاذ":
                return 'orange';
              case 'Specialist'||"استشاري":
                return 'brown';
              default:
                return 'gray';
            }
          },
          stroke: 'white',
          strokeWidth: 2,
          opacity: d => (activeSlice && activeSlice.x === d.x) ? 0.7 : 1,

        }
      }}
      events={[{
        target: 'data2',
        eventHandlers: {
          onMouseOver: () => {
            return [{
              target: 'data2',
              mutation: (props) => {
                setActiveSlice(props.datum);
                return {
                  style: {
                    fill: '#3182CE',
                  }
                };
              }
            }];
          },
          onMouseOut: () => {
            return [{
              target: 'data2',
              mutation: () => {
                setActiveSlice(null);
                return null;
              }
            }];
          },
        }
      }]}
    />
                    </Col>
                </Row>
                <Row>
              
                </Row>
            </div>
        </Container>
    </div>
        </>
    );
};

export default Admin;