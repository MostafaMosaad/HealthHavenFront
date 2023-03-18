import React from "react";
import { Link } from "react-router-dom";
import st from"./aboutus.module.css";
import { useTranslation } from 'react-i18next';

function MissionCard() {
  const { t } = useTranslation();
  
  return (
<div className={st["DivCard"]}>
      <h2 className={st["cardTitle"]}>{t("ourMission")}</h2>
      <p className={st["cardText"]}>
        {t("healthcareServices")}<br />
        {t("contactUs")}{" "}
        <Link to="/contactus">
          <span>{t("contactUsLink")}</span>
        </Link>
      </p>
    </div>
  );
}

export default MissionCard;