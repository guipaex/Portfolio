import { useState } from "react";
import { PiListBold, PiXBold } from "react-icons/pi";
import styles from "./Menu.module.scss";
import classNames from "classnames";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.menu}>
      <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)} onBlur={() => setIsOpen(!isOpen)}>
        {isOpen ? <PiXBold className={styles.menuButton__close} /> : <PiListBold className={styles.menuButton__open} />}
      </button>
      <ul
        className={classNames({
          [styles.menu__links]: true,
          [styles["menu__links--open"]]: isOpen,
          [styles["menu__links--closed"]]: !isOpen,
        })}
      >
        <a className={styles.menu__item} href=''>
          Sobre
        </a>
        <a className={styles.menu__item} href=''>
          Projetos
        </a>
        <a className={styles.menu__item} href=''>
          Contato
        </a>
      </ul>
    </nav>
  );
}
