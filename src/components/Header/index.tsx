import { ReactComponent as Logo } from "../../assets/favicon.svg";
import styles from "./Header.module.scss";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__navBar}>
        <Logo className={styles.navBar__logo} />
        <Menu />
      </nav>
    </header>
  );
}
