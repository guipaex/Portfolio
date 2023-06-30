import styles from "./Footer.module.scss";
import { FaGithub, FaLinkedin, FaRegEnvelope, FaBehance, FaAngleDown, FaChevronDown } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.container}>
      © 2023 | Guilherme Paes
      <ul className={styles.listaLinks}>
        <a href='https://github.com/guipaex' target='_blank'>
          <FaGithub className={styles.listaLinks__link} />
        </a>
        <a href='https://www.linkedin.com/in/guilhermepaes/' target='_blank'>
          <FaLinkedin className={styles.listaLinks__link} />
        </a>
        <a href='mailto:guipaex@gmail.com' target='_blank'>
          <FaRegEnvelope className={styles.listaLinks__link} />
        </a>
        <a href='https://www.behance.net/guilhermepaes' target='_blank'>
          <FaBehance className={styles.listaLinks__link} />
        </a>
      </ul>
    </div>
  );
}
