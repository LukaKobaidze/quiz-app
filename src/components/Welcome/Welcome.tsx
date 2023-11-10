import Heading from '@/components/Heading';
import Select from '@/components/Select';
import Text from '@/components/Text';
import styles from './Welcome.module.scss';
import { QuizzesType } from '@/data/types';
import { getImageSrc } from '@/helpers';

interface Props {
  quizzes: QuizzesType;
  onSubjectSelect: (index: number) => void;
}

export default function Welcome(props: Props) {
  const { quizzes, onSubjectSelect } = props;

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Heading level="1" variant="L-regular" className={styles.heading}>
          Welcome to the <span className={styles.bold}>Frontend Quiz!</span>
        </Heading>
        <Text as="span" variant="S">
          Pick a subject to get started.
        </Text>
      </div>
      <div className={styles.selection}>
        {quizzes.map(({ title, icon }, index) => (
          <Select
            key={title}
            as="button"
            value={title}
            box={<img src={getImageSrc(icon)} alt="" />}
            onClick={() => onSubjectSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}
