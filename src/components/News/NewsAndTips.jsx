import Style from "./news.module.css";
import { useTranslation } from 'react-i18next';

export default function NewsTips() {
  const { i18n } = useTranslation();

  return (
    <div className={" mt-5 " + Style["news-tips"]}>
      <h3>{i18n.t("News and Tips")}</h3>
      <p>{i18n.t("Some Tips")}</p>
    </div>
  );
}
