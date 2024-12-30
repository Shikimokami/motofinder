import { useState } from "react";
import styles from "./QuestionsContent.module.css";
import FinishedQuiz from "../FinishedQuiz/FinishedQuiz";
import { questions } from "../../data/questions";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function QuestionsContent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const handleAnswer = (questionTag, answerId) => {
    setAnswers((prev) => ({
      ...prev,
      [questionTag]: answerId,
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setFinished(false);
  };
  if (finished) {
    return <FinishedQuiz resetQuiz={resetQuiz} answers={answers} />;
  }

  const question = questions[currentQuestion];

  return (
    <>
      <div className={styles.questionContent}>
        <h2>{question.text}</h2>
        <ProgressBar currentQuestion={currentQuestion} />
      </div>
      <div className={styles.insideQuestionContainer}>
        {question.options.map((option) => (
          <button
            key={option.id}
            className={styles.insideQuestion}
            onClick={() => handleAnswer(question.tag, option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </>
  );
}
