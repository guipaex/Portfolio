import { FaGithub, FaLinkedin, FaRegEnvelope, FaBehance, FaEye } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BsArrowUpRightCircle } from "react-icons/bs";
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

const VerProjeto = () => {
  return (
    <button className={styles.cta}>
      <span className={styles.cta__txt}>Visit</span>
      <HiArrowNarrowRight className={styles.cta__arrow} size={20} />
    </button>
  );
};

interface ButtonProps {
  text: string;
  link: string | null;
}

const Repository = ({ text, link }: ButtonProps) => {
  return (
    <a href={`${link}`} target='_blank' className={styles.repoBtn}>
      <FaGithub className={styles.repoBtn__icon} size={32} />
      {text}
    </a>
  );
};

const Demo = ({ text, link }: ButtonProps) => {
  return (
    <a href={`${link}`} target='_blank' className={styles.demoBtn}>
      {text}
      <BsArrowUpRightCircle className={styles.demoBtn__icon} size={32} />
    </a>
  );
};

export { Github, Linkedin, Email, Behance, Demo, Repository };
