import styles from "./RepoCard.module.scss";
import { Demo, Repository } from "../Buttons";
import Tag from "../Tag";

interface Props {
  name: string;
  desc?: string;
  demoLink?: string | null;
  repoLink?: string | null;
  langsLink?: string;
  tags?: Array<string> | null;
}

export default function RepoCard(repo: Props) {
  function formatTags(data: Array<string> | null | undefined) {
    const filtered = data?.filter((tag) => tag !== "portfolio");
    let formatted = filtered?.map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1));
    return formatted;
  }
  const tags = formatTags(repo.tags);

  let imgURL: string;
  if (repo.tags?.includes("react")) {
    imgURL = `https://raw.githubusercontent.com/guipaex/${repo.name}/master/public/assets/thumb.jpg`;
  } else if (repo.repoLink === "private") {
    imgURL = `https://github.com/guipaex/Portfolio/blob/714dc04426cc6bbc3ad8abb189912d0592c78b45/public/assets/thumb_sportflow.jpg?raw=true`;
    console.log(repo.repoLink);
  } else {
    imgURL = `https://raw.githubusercontent.com/guipaex/${repo.name}/master/assets/thumb.jpg`;
  }
  return (
    /* add 'style={{ backgroundColor: "color" }}' to change cards background*/
    <div className={styles.card}>
      <div className={styles.card__imgFrame}>
        <img className={styles.card__img} src={imgURL} alt={repo.name}></img>
      </div>
      <div className={styles.card__data}>
        <h3 className={styles.card__title}>{repo.name.replace(/[-]+/g, " ")}</h3>
        <ul className={styles.card__tags}>
          {tags?.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </ul>
        <p className={styles.card__description}>{repo.desc}</p>
        <div className={styles.card__links}>
          <Repository text={"Repository"} link={repo.repoLink || "private"} />
          <Demo text={"See the Project"} link={repo.demoLink || " "} />
        </div>
      </div>
    </div>
  );
}
