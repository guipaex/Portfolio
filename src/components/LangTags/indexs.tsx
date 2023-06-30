import axios from "axios";
import styles from "./Languages.module.scss";
import { useEffect, useState } from "react";
import { error } from "console";

interface Props {
  url: string;
}

interface RepoLangs {
  lang: number;
}

export default function LangTags(langURL: Props) {
  const [languages, setLangs] = useState<RepoLangs[]>([]);
  useEffect(() => {
    axios
      .get(langURL.url)
      .then((response) => {
        setLangs(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.languages}>
      {Object.keys(languages)
        .slice(0, 3)
        .map((lang) => {
          return (
            <p key={lang} className={styles.languages__lang}>
              {lang}
            </p>
          );
        })}
    </div>
  );
}
