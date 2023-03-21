import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import "./Style.css";
function Medical() {
  const { i18n } = useTranslation();

  const [token] = useState(localStorage.getItem("userToken"));
  const API_URL = "/users/getMe";
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(result.data.data.user);
    };
    fetchData();
  }, [token]);

  const userHistory = data.medicalHistory || [];

  return (
    <>
           {userHistory?.map((history)=> (
                  <div className="card " style={{ width: " 24rem" ,marginBottom:"2rem",marginLeft:"2rem" ,marginTop:"8rem"}}>
                    <img src={"/Imges/history2.png"} className="card-img-top" style={{ filter: "brightness(92%)" }}/>
                    <div className="card-body">
                      <table className="tabl">
                        <tbody>
                          <tr className="trUser">
                            <td className="leftTD">{i18n.t("Date")}</td>
                            <td  className=" RightTD">{history.date}</td>
                          </tr>
                          <tr className="trUser">
                            <td className="leftTD">{i18n.t("State")}</td>
                            <td  className=" RightTD">{history.Discriptions}</td>
                          </tr>
                          <tr className="trUser">
                            <td className="leftTD">{i18n.t("Analysis")}</td>
                            <td className=" RightTD">{history.Labs}</td>
                          </tr>
                          <tr className="trUser">
                            <td className="leftTD">{i18n.t("Prescription")}</td>
                            <td  className=" RightTD">{history.Pharmacies}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
             ))}
             </>

  );
}

export default Medical;
