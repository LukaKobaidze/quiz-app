import styles from './ProgressBar.module.scss';

interface Props {
  /** In percentage | 0-100 (%) */
  progress: number;
  className?: string;
}

export default function ProgressBar(props: Props) {
  const { progress, className } = props;

  return (
    <div className={`${styles.bar} ${className || ''}`}>
      <div className={styles.progress} style={{ width: `${progress}%` }} />
    </div>
  );
}
