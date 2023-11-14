import { useState } from 'react';
import { SubjectDataType } from '@/data/types';
import Text from '@/components/Text';
import Heading from '@/components/Heading';
import styles from './Quiz.module.scss';
import Select from '../Select';
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '../Button';
import { getImageSrc } from '@/helpers';

interface Props {
  data: SubjectDataType;
}

export default function Quiz(props: Props) {
  const { data } = props;

  const [questionIndex, setQuestionIndex] = useState(0);
  const [optionSelected, setOptionSelected] = useState<number | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const currentQuestion = data.questions[questionIndex];

  const handleOptionChange = (e: React.FormEvent<HTMLFormElement>) => {
    if (correctAnswer !== null) return;

    const input = e.target as HTMLInputElement;
    setOptionSelected(Number(input.dataset.optionIndex));
  };

  const handleAnswerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setCorrectAnswer((state) => {
      if (state === null) {
        if (
          optionSelected &&
          currentQuestion.answer === currentQuestion.options[optionSelected]
        ) {
          setScore((state) => state + 1);
        }

        return currentQuestion.options.findIndex(
          (option) => option === currentQuestion.answer
        );
      } else {
        setQuestionIndex((state) => state + 1);
        setOptionSelected(null);
        return null;
      }
    });
  };

  return (
    <div className={styles.container}>
      {questionIndex === data.questions.length ? (
        <>
          <div>
            <Heading variant="L-regular" level="1">
              <span>Quiz completed</span>
              <span className={styles.bold}>You scored...</span>
            </Heading>
          </div>
          <div>
            <Select
              as="div"
              box={<img src={getImageSrc(data.icon)} alt="" />}
              value={data.title}
            />
            <Text as="span" variant="display">
              {score}
            </Text>
            <Text as="span" variant="S">
              out of {data.questions.length}
            </Text>
          </div>
        </>
      ) : (
        <>
          <div className={styles.question}>
            <Text as="span" variant="S">
              Question {questionIndex + 1} of {data.questions.length}
            </Text>
            <Heading variant="M" level="1" className={styles.questionHeading}>
              {currentQuestion.question}
            </Heading>

            <ProgressBar
              className={styles.questionProgressBar}
              progress={(questionIndex / data.questions.length) * 100}
            />
          </div>
          <form
            className={styles.options}
            onChange={handleOptionChange}
            onSubmit={handleAnswerSubmit}
          >
            {currentQuestion.options.map((option, index) => (
              <Select
                key={option}
                as="radio"
                box={String.fromCharCode(97 + index).toUpperCase()}
                value={option}
                name="quiz-option"
                isCorrect={correctAnswer !== null && correctAnswer === index}
                variant={
                  correctAnswer !== null && index === optionSelected
                    ? correctAnswer === index
                      ? 'picked-correctly'
                      : 'picked-incorrectly'
                    : optionSelected === index
                    ? 'selected'
                    : undefined
                }
                data-option-index={index}
              />
            ))}
            <Button
              type="submit"
              className={styles.optionsSubmit}
              disabled={optionSelected === null}
            >
              {correctAnswer === null ? 'Submit Answer' : 'Next Question'}
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
