import styles from "./RepoCard.module.scss";
import { VscGithub } from "react-icons/vsc";
import LangTags from "../LangTags";
import { VerProjeto } from "../Buttons";

interface Props {
  name: string;
  desc: string;
  demoLink: string | null;
  repoLink: string | null;
  langsLink: string;
  tags: Array<string>;
}

export default function RepoCard(repo: Props) {
  let imgURL: string;
  if (repo.tags.includes("react")) {
    imgURL = `https://raw.githubusercontent.com/guipaex/${repo.name}/master/public/assets/thumb.png`;
  } else {
    imgURL = `https://raw.githubusercontent.com/guipaex/${repo.name}/master/assets/thumb.png`;
  }

  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <img className={styles.thumbnail__img} src={imgURL} alt={repo.name}></img>
      </div>
      <LangTags url={repo.langsLink} />
      <h3 className={styles.card__title}>{repo.name.replace(/[-]+/g, " ")}</h3>
      {/* <p className={styles.card__description}>{repo.desc}</p> */}
      <div className={styles.card__buttons}>
        <a href={`${repo.repoLink}`} target='_blank'>
          <VscGithub size={32} className={styles.gitButton} />
        </a>
        <a href={`${repo.demoLink}`} target='_blank'>
          <VerProjeto />
        </a>
      </div>
    </div>
  );
}
