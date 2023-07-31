import styles from "./Home.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-scroll";
import { Behance, Email, Github, Linkedin } from "../../components/Buttons";
import { FaChevronDown } from "react-icons/fa";

export default function Home() {
  return (
    <div id='home'>
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

          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500}>
            <FaChevronDown className={styles.skipper__arrow} />
          </Link>
          {/* <FaChevronDown onClick={scrollTop} className={styles.skipper__arrow} /> */}
        </div>
      </div>
      <div className={styles.logo__container}>
        <Logo className={styles.logo} />
      </div>
    </div>
  );
}
