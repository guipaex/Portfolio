import styles from "./RepoCard.module.scss";
import Buttons from "../Buttons";
import { VscGithub } from "react-icons/vsc";
import Languages from "../Languages/indexs";

export default function RepoCard() {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <img className={styles.thumbnail__img} src='/assets/img/thumb_barbeariaAlura.png' alt='Barbearia Alura'></img>
      </div>
      <Languages />
      <h1 className={styles.card__title}>Optimus Tech</h1>
      <p className={styles.card__description}>
        Página Web de vagas da empresa Optimus Tech, desenvolvida a partir de um layout do Figma, para o desafio do 7
        Days Of Code.
      </p>
      <div className={styles.card__buttons}>
        <VscGithub size={35} className={styles.gitButton} />
        <Buttons />
      </div>
    </div>
  );
}
