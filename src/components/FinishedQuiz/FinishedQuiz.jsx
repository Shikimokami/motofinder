import styles from "./FinishedQuiz.module.css";

import FilteredMotorbikes from "../FilteredMotorbikes/FilteredMotorbikes";

export default function FinishedQuiz({ answers, resetQuiz }) {
  return (
    <div className={styles.questionContent}>
      
      <br />
      <FilteredMotorbikes className={styles.filtered} answers={answers} />
      <button className={styles.againButton} onClick={resetQuiz}>
        Reiniciar
      </button>
    </div>
  );
}
