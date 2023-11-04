import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      © 2023 | Designed and Developed by{" "}
      <a className={styles.link} href='https://github.com/guipaex' target='_blank' rel='noreferrer'>
        Guilherme Paes
      </a>
      .
    </footer>
  );
}
