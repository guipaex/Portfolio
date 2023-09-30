import styles from "./About.module.scss";
import MyPhoto from "../../assets/guipaex.png";
import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa6";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiMysql,
  SiMongodb,
  SiGit,
  SiNodedotjs,
  SiSass,
  SiFigma,
  SiGithub,
} from "react-icons/si";
export default function About() {
  return (
    <section id='about' className={styles.container}>
      <h2 className={styles.title}>
        More <span className={styles.highlight}>about me</span>
        <span className={styles.title__dot}>.</span>
      </h2>
      <div className={styles.content}>
        <img src={MyPhoto} alt='Guilherme Paes smiling' className={styles.photo} />
        <div className={styles.textBox}>
          <ul className={styles.textBox__social}>
            <li>
              <a href='https://www.linkedin.com/in/guilhermepaes/' target='_blank' rel='noreferrer'>
                <FaLinkedin className={styles.linkIcon} />
              </a>
            </li>
            <li>
              <a href='https://github.com/guipaex' target='_blank' rel='noreferrer'>
                <FaGithub className={styles.linkIcon} />
              </a>
            </li>
            <li>
              <a href='https://www.behance.net/guilhermepaes' target='_blank' rel='noreferrer'>
                <FaBehance className={styles.linkIcon} />
              </a>
            </li>
          </ul>
          <p className={styles.textBox__text}>
            I’m from Rio de Janeiro with 10 years of experience as a <span className={styles.highlight}>Designer </span>
            in a lot of advertising agencies. Now, as a <span className={styles.highlight}>Web Developer</span>, I use
            my experience to design build beautiful interfaces.
          </p>
          <button>
            <a
              className={styles.resume}
              target='_blank'
              rel='noopener noreferrer'
              href='https://drive.google.com/file/d/19l2tbklUnSWXVQcW9Y8cSPNs1T2bL2Ou/view?usp=sharing'
            >
              Donwload Resume
            </a>
          </button>
        </div>
        <p className={styles.text}>These are some of technologies that I most use:</p>
        <div className={styles.listaStack}>
          <SiHtml5 className={styles.listaStack__item} />
          <SiCss3 className={styles.listaStack__item} />
          <SiJavascript className={styles.listaStack__item} />
          <SiTypescript className={styles.listaStack__item} />
          <SiReact className={styles.listaStack__item} />
          <SiSass className={styles.listaStack__item} />
          <SiGithub className={styles.listaStack__item} />
          <SiFigma className={styles.listaStack__item} />
          <SiMysql className={styles.listaStack__item} />
          <SiMongodb className={styles.listaStack__item} />
          <SiGit className={styles.listaStack__item} />
          <SiNodedotjs className={styles.listaStack__item} />
        </div>
      </div>
    </section>
  );
}
