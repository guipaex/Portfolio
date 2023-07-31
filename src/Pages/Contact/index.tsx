import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.container} id='contact'>
      <h2 className={styles.container__title}>Contato</h2>
      <p className={styles.container__text}>
        Entre em contato, vamos conversar comigo pelo LinkedIn, ou me mande um e-mail para{" "}
        <span>guipaex@gmail.com</span>
      </p>
    </div>
  );
}
