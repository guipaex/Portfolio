import styles from "./Languages.module.scss";

export default function Languages() {
  //Array de Linguages
  const languages = ["HTML", "CSS", "JavaScript"];

  return (
    <div className={styles.languages}>
      {languages.map((language) => (
        <p className={styles.languages__lang}>{language}</p>
      ))}
    </div>
  );
}
