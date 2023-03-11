import Style from "./news.module.css";

export default function NewsTips() {
  return (
    <div className={" mt-5 " + Style["news-tips"]}>
      <h3>News and Tips</h3>
      <p>Here is some news and tips.</p>
    </div>
  );
}
