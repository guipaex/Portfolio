import { FaGithub, FaLinkedin, FaRegEnvelope, FaBehance } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import styles from "./Buttons.module.scss";

function Linkedin() {
  return (
    <a href='https://www.linkedin.com/in/guilhermepaes/' target='_blank'>
      <FaLinkedin className={styles.socialLink} />
    </a>
  );
}

function Behance() {
  return (
    <a href='https://www.behance.net/guilhermepaes' target='_blank'>
      <FaBehance className={styles.socialLink} />
    </a>
  );
}

function Github() {
  return (
    <a href='https://github.com/guipaex' target='_blank'>
      <FaGithub className={styles.socialLink} />
    </a>
  );
}

function Email() {
  return (
    <a href='mailto:guipaex@gmail.com' target='_blank'>
      <FaRegEnvelope className={styles.socialLink} />
    </a>
  );
}

function VerProjeto() {
  return (
    <button className={styles.cta}>
      <span className={styles.cta__txt}>Visit</span>
      <HiArrowNarrowRight className={styles.cta__arrow} size={20} />
    </button>
  );
}

export { Github, Linkedin, Email, Behance, VerProjeto };
