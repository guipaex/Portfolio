import styles from "./RepoCard.module.scss";
import Buttons from "../Buttons";
import { Link } from "react-router-dom";
import { VscGithub } from "react-icons/vsc";
import Languages from "../Languages/indexs";

interface Props {
  name: string;
  desc: string | null;
  demoLink: string | null;
  repoLink: string;
  languages_url: string;
  tags: Array<string>;
}

export default function RepoCard(repo: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <img className={styles.thumbnail__img} src='/assets/img/thumb_barbeariaAlura.png' alt='Barbearia Alura'></img>
      </div>
      {repo.tags.map((language) => (
        <p className={styles.languages__lang}>{language}</p>
      ))}
      <h1 className={styles.card__title}>{repo.name.replace(/[-]+/g, " ")}</h1>
      <p className={styles.card__description}>{repo.desc}</p>
      <div className={styles.card__buttons}>
        <Link to={repo.repoLink}>
          <VscGithub size={35} className={styles.gitButton} />
        </Link>

        <Buttons />
      </div>
    </div>
  );
}
