import styles from "./Contact.module.scss";
import { FaBehance, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
export default function Contact() {
  return (
    <section className={styles.container} id='contact'>
      <div className={styles.container__content}>
        <h2 className={styles.title}>
          Let’s work <span className={styles.title__highlight}>together</span>
          <span className={styles.title__dot}>.</span>
        </h2>
        <p className={styles.email}>
          Send a e-mail to: <a href='mailto:guipaex@gmail.com'>guipaex@gmail.com</a>
        </p>

        <p className={styles.list}>or follow me at:</p>
        <ul className={styles.list__links}>
          <a href='http://behance.net/guilhermepaes' target='_blank' rel='noopener noreferrer'>
            <FaBehance className={styles.list__icon} />
          </a>
          <a href='https://www.instagram.com/guipaex' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className={styles.list__icon} />
          </a>
          <a href='https://github.com/guipaex/' target='_blank' rel='noopener noreferrer'>
            <FaGithub className={styles.list__icon} />
          </a>
          <a href='https://www.linkedin.com/in/guilhermepaes/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className={styles.list__icon} />
          </a>
        </ul>
      </div>
    </section>
  );
}
