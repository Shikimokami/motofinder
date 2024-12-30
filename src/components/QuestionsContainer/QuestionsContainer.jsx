import styles from "./QuestionsContainer.module.css";
import QuestionsContent from "../QuestionsContent/QuestionsContent";

export default function Questions() {
  return (
    <div className={styles.content}>
      <div className={styles.questionContainer}>
        <QuestionsContent />
      </div>
    </div>
  );
}
