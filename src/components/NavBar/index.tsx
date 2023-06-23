import styles from "./NavBar.module.scss";
import { PiGlobeDuotone } from "react-icons/pi";
import { ReactComponent as Logo } from "../../assets/favicon.svg";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <Logo className={styles.header__logo} />
      <nav className={styles.nav}>
        <ul className={styles.nav__links}>
          <li className={styles.nav__item}>
            <a href=''>Sobre</a>
          </li>
          <li className={styles.nav__item}>
            <a href=''>Projetos</a>
          </li>
          <li className={styles.nav__item}>
            <a href=''>Contato</a>
          </li>
        </ul>
      </nav>
      <button className={styles.langButton}>
        <PiGlobeDuotone className={styles.langButton__icon} />
      </button>
    </header>
  );
}
