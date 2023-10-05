import { useState } from "react";
import { Link } from "react-scroll";
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
        <li>
          <Link
            className={styles.menu__item}
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={styles.menu__item}
            activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={styles.menu__item}
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
