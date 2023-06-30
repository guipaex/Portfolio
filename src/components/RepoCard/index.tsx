import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./RepoCard.module.scss";
import Buttons from "../Buttons";
import { Link } from "react-router-dom";
import { VscGithub } from "react-icons/vsc";
import LangTags from "../LangTags/indexs";

interface Props {
  name: string;
  desc: string | null;
  demoLink: string | null;
  repoLink: string | null;
  langsLink: string;
  tags: Array<string>;
}

export default function RepoCard(repo: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <img className={styles.thumbnail__img} src='/assets/img/thumb_barbeariaAlura.png' alt='Barbearia Alura'></img>
      </div>
      <LangTags url={repo.langsLink} />
      <h1 className={styles.card__title}>{repo.name.replace(/[-]+/g, " ")}</h1>
      <p className={styles.card__description}>{repo.desc}</p>
      <div className={styles.card__buttons}>
        <a href={`${repo.repoLink}`} target='_blank'>
          <VscGithub size={35} />
        </a>
        <a href={`${repo.demoLink}`} target='_blank'>
          <Buttons />
        </a>
      </div>
    </div>
  );
}
