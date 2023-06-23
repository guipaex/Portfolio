import styles from "./Buttons.module.scss";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Buttons() {
  return (
    <button className={styles.cta}>
      Ver Projeto
      <HiArrowNarrowRight size={20} />
    </button>
  );
}
