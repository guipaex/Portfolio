import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaRegEnvelope, FaBehance, FaAngleDown, FaChevronDown } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.container}>
      © 2023 | Guilherme Paes
      <ul className={styles.listaLinks}>
        <a href='https://github.com/guipaex' target='_blank'>
          <FaGithub className={styles.listaLinks__link} />
        </a>
        <a href=''>
          <FaLinkedin className={styles.listaLinks__link} />
        </a>
        <a href=''>
          <FaRegEnvelope className={styles.listaLinks__link} />
        </a>
        <a href=''>
          <FaBehance className={styles.listaLinks__link} />
        </a>
      </ul>
    </div>
  );
}
