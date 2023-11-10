import { useState } from 'react';
import { SubjectDataType } from '@/data/types';
import Text from '@/components/Text';
import Heading from '@/components/Heading';
import styles from './Quiz.module.scss';
import Select from '../Select';
import ProgressBar from '../ProgressBar/ProgressBar';

interface Props {
  data: SubjectDataType;
}

export default function Quiz(props: Props) {
  const { data } = props;

  const [questionIndex, setQuestionIndex] = useState(0);

  const currentQuestion = data.questions[questionIndex];
  return (
    <div className={styles.container}>
      <div className={styles.question}>
        <Text as="span" variant="S">
          Question {questionIndex + 1} of {data.questions.length}
        </Text>
        <Heading variant="M" level="1" className={styles.questionHeading}>
          {currentQuestion.question}
        </Heading>

        <ProgressBar className={styles.questionProgressBar} progress={(questionIndex / data.questions.length) * 100} />
      </div>
      <form className={styles.options}>
        {currentQuestion.options.map((option, index) => (
          <Select
            key={option}
            as="radio"
            box={String.fromCharCode(97 + index).toUpperCase()}
            value={option}
            name="quiz-option"
          />
        ))}
      </form>
    </div>
  );
}
