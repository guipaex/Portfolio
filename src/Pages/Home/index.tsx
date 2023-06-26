import styles from "./Home.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { FaGithub, FaLinkedin, FaRegEnvelope, FaBehance, FaAngleDown, FaChevronDown } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__content}>
          <h1 className={styles.container__title}>Guilherme Paes</h1>
          <h4 className={styles.container__subtitle}>Desenvolvedor FullStack & Designer </h4>
          <ul className={styles.listaLinks}>
            <a href=''>
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
          <FaChevronDown className={styles.skipper__arrow} />
        </div>
      </div>
      <div className={styles.logo__container}>
        <Logo className={styles.logo} />
      </div>
    </>
  );
}
