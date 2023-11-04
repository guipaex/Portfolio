import styles from "./About.module.scss";
import MyPhoto from "../../assets/guipaex.png";
import { FaLinkedin, FaGithub, FaBehance, FaArrowDown } from "react-icons/fa6";
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
  const techIcons = [
    <SiHtml5 className={styles.techList__item} />,
    <SiCss3 className={styles.techList__item} />,
    <SiJavascript className={styles.techList__item} />,
    <SiTypescript className={styles.techList__item} />,
    <SiReact className={styles.techList__item} />,
    <SiMysql className={styles.techList__item} />,
    <SiMongodb className={styles.techList__item} />,
    <SiGit className={styles.techList__item} />,
    <SiNodedotjs className={styles.techList__item} />,
    <SiSass className={styles.techList__item} />,
    <SiFigma className={styles.techList__item} />,
    <SiGithub className={styles.techList__item} />,
  ];

  return (
    <section id='about' className={styles.container}>
      <h2 className={styles.title}>
        More <span className={styles.title__highlight}>about me</span>
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
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://drive.google.com/file/d/1GMER6wKM_QLWpBuxfK2y13cTB_RZfp5Z/view?usp=sharing'
          >
            <div className={styles.resumeBtn}>
              Download Resume
              <FaArrowDown />
            </div>
          </a>
        </div>

        <p className={styles.text}>These are some of technologies that I most use:</p>
        <ul className={styles.techList}>
          {techIcons.map((icon) => {
            return icon;
          })}
        </ul>
      </div>
    </section>
  );
}
