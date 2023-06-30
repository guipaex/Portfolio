import styles from "./Home.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Behance, Email, Github, Linkedin } from "../../components/Buttons";
import { FaGithub, FaLinkedin, FaRegEnvelope, FaBehance, FaAngleDown, FaChevronDown } from "react-icons/fa";

export default function Home() {
  function scrollTop() {
    window.scrollTo({
      left: 0,
      top: 900,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__content}>
          <h1 className={styles.container__title}>Guilherme Paes</h1>
          <h4 className={styles.container__subtitle}>Desenvolvedor FullStack & Designer </h4>
          <ul className={styles.listaLinks}>
            <Github />
            <Linkedin />
            <Behance />
            <Email />
          </ul>
          <FaChevronDown onClick={scrollTop} className={styles.skipper__arrow} />
        </div>
      </div>
      <div className={styles.logo__container}>
        <Logo className={styles.logo} />
      </div>
    </>
  );
}
