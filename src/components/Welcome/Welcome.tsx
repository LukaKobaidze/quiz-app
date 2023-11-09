import Heading from '@/components/Heading';
import Text from '@/components/Text';
import styles from './Welcome.module.scss';

export default function Welcome() {
  return (
    <div>
      <Heading level="1" variant="L-regular">
        Welcome to the <span className={styles.bold}>Frontend Quiz!</span>
      </Heading>
      <Text as="span" variant="S">
        Pick a subject to get started.
      </Text>
    </div>
  );
}
