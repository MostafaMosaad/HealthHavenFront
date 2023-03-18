import React from "react";
import Style from"./aboutus.module.css";
import { useTranslation } from 'react-i18next';

function StoryCard() {
  const { t } = useTranslation();
    return (
      <div className={Style["DivCard"]}>
        <h2 className={Style["cardTitle"]}>{t("ourStory")}</h2>
        <p className={Style["cardText"]}>
        {t("storyContent")}
        </p>
      </div>
    );
  }

  export default StoryCard;