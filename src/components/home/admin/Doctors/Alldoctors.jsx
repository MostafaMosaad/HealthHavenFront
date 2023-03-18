import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { BiShow } from "react-icons/bi";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Alldoctors.css";
import AvergeRating from "../../../Rating/AvarageRating";
import StarRating from "../../../Rating/RatingStar";
import { useTranslation } from 'react-i18next';

const Swal = require('sweetalert2')

const AllDoc = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [token, SetToken] = useState(localStorage.getItem("userToken"));
  const [deletedoc, SetDelete] = useState();

  const [data, setData] = useState();
  const API_URL = "/doctors/admindoc";

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

  const docs = usersArr.data.doctors;

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Container className="my-5">
        <h1 className="admin-title mb-5 mt-2">{t('All Doctors')} ({docs.length})</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {docs?.map((doc) => (
            <Col key={doc._id}>
              <Card className="h-100 patient-card">
                <Card.Body>
                  <Card.Title>{doc.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {doc.email}
                  </Card.Subtitle>
                  <Card.Text>
                    <div className="mt-4 mb-2 ">
                      <strong style={{color:"red"}}>{t('Phone')}</strong> {doc.phone}
                    </div>
                    <div className="mb-2">
                      <strong style={{color:"red"}}>{t('Address')}</strong> {doc.address}
                    </div>
                    <div className="mb-2">
                      <strong style={{color:"red"}}>{t('Major')}</strong> {`${t(doc.major)}`}
                    </div>
                    <div className="mb-2">
                      <strong style={{color:"red"}}>{t('Category')}</strong> {`${t(doc.category)}`}
                    </div>
                    <div className="mb-2">
                      <strong style={{color:"red"}}>{t('isVerified')}</strong> {`${t(doc.isVerifired.toString())}`}
                    </div>
                    <div className="mb-2">
                      <strong style={{color:"red"}}>{t('appointments')}</strong> {doc.appointments.length}
                    </div>
                    <div className="mb-2">
                      <span >{t('AvarageRate')}</span>{" "}
                      <AvergeRating DoctorsId={doc._id}></AvergeRating>
                    </div>
                  </Card.Text>
                  <div className="card-buttons ">
                    <Button
                      variant="success"
                      className="d-block w-75 mb-2 m-auto"
                      onClick={() => {
                        navigate(`/appointment/${doc._id}`);
                      }}
                    >
                      <BiShow /> {t('appointments')}
                    </Button>
                    <Button
                      variant="success"
                      className="mx-1 w-75 mb-2 m-auto"
                      onClick={() => {
                        navigate(`/updatedocbyadmin/${doc._id}`);
                      }}
                    >
                      <RxUpdate /> {t('Update')}
                    </Button>
                    <Button
                      variant="danger"
                      className="w-75 mb-2 m-auto"
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
                              axios.delete(`/doctors/${doc._id}`, {
                                headers: { Authorization: `Bearer ${token}` },
                              });
                              for (let d = 0; d < docs.length; d++) {
                                if (doc._id === docs[d]._id) {
                                  SetDelete(docs.splice(d, 1));
                                }
                              }

                              swalWithBootstrapButtons.fire(
                                "Deleted!",
                                "Doctor has been deleted.",
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
                      <FaTrash /> {t('Delete')}
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

export default AllDoc;
