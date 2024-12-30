import styles from "./ProgressBar.module.css";
import { questions } from "../../data/questions";

function ProgressBar({ currentQuestion }) {
  const actualQuestion = currentQuestion + 1;
  const totalQuestions = questions.length;
  const progressPercentage = (actualQuestion / totalQuestions) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
