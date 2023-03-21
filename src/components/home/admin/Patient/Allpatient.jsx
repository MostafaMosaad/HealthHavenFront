import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { BiShow } from "react-icons/bi";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Allpatient.css";
import { useTranslation } from 'react-i18next';


const Swal = require('sweetalert2')

const AllPatient = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("userToken"));

  const [data, setData] = useState();
  const API_URL = "/users/";
  const [deletedoc, SetDelete] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(result.data);
    };
    fetchData();
  }, [token]);

  const usersArr = data;

  if (!usersArr) return <div>Loading...</div>;

  const patients = usersArr.data.users;

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container className="my-5">
        <h1 className="admin-title mb-5 mt-2">
        {t("All Patients")} ({patients.length})
        </h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {patients?.map((patient) => (
            <Col key={patient._id}>
              <Card className="h-100 patient-card">
                <Card.Body>
                  <Card.Title>{patient.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {patient.email}
                  </Card.Subtitle>
                  <Card.Text>
                    <div className="mt-4 mb-2 ">
                      <strong style={{color:"red"}}>ID:</strong> {patient._id}
                    </div>
                    <div className="mb-2">
                      <strong style={{color:"red"}}>{t("Phone")}</strong> {patient.phone}
                    </div>
                    <div className="mb-2">
                      <strong style={{color:"red"}}>{t("Age")}</strong> {patient.DateOfBirth}
                    </div>
                    <div className="mb-2">
                      <strong style={{color:"red"}}>{t("Missed bookings")}</strong>{" "}
                      {patient.missingBooking ? `${t("Yes")}` :`${t("No")}`}
                    </div>
                  </Card.Text>
                  <div className="card-buttons ">
                    <Button
                      variant="success"
                      className="d-block w-75 mb-2 m-auto"
                      onClick={() => {
                        navigate(`/MidicalHistory/${patient._id}`);
                      }}
                    >
                      <BiShow /> {t("History")}
                    </Button>
                    <Button
                      variant="success"
                      className="d-block w-75 mb-2 m-auto"
                      onClick={() => {
                        navigate(`/updatepatirntbyadmin/${patient._id}`);
                      }}
                    >
                      <RxUpdate /> {t("Update")}
                    </Button>
                    <Button
                      variant="danger"
                      className="d-block w-75 m-auto"
                      onClick={() => {
                        const swalWithBootstrapButtons = Swal.mixin({
                          customClass: {
                            confirmButton: "btn btn-success",
                            cancelButton: "btn btn-danger",
                          },
                          buttonsStyling: false,
                        });

                        swalWithBootstrapButtons
                          .fire({
                            title: "Are you sure?",

                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonText: "Yes",
                            cancelButtonText: "No",
                            reverseButtons: true,
                          })
                          .then((result) => {
                            if (result.isConfirmed) {
                              axios.delete(`/users/${patient._id}`, {
                                headers: { Authorization: `Bearer ${token}` },
                              });
                              for (let d = 0; d < patients.length; d++) {
                                if (patient._id === patients[d]._id) {
                                  SetDelete(patients.splice(d, 1));
                                }
                              }
                              swalWithBootstrapButtons.fire(
                                "Deleted!",
                                "Your Patient has been deleted.",
                                "success"
                              );
                            } else if (
                              result.dismiss === Swal.DismissReason.cancel
                            ) {
                              swalWithBootstrapButtons.fire(
                                "Cancelled",
                                "Cancelled :)",
                                "error"
                              );
                            }
                          });
                      }}
                    >
                      <FaTrash />  {t("Delete")}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllPatient;
