import { IconMoon, IconSun } from '@/assets/images';
import styles from './ThemeSwitch.module.scss';
import { ThemeType } from '@/App';

interface Props {
  theme: ThemeType;
  onSwitch: () => void;
  className?: string;
}

export default function ThemeSwitch(props: Props) {
  const { theme, onSwitch, className } = props;

  return (
    <div className={`${styles.container} ${className || ''}`}>
      <IconSun />
      <button
        className={`${styles.switch} ${theme === 'dark' ? styles.active : ''}`}
        onClick={() => onSwitch()}
      />
      <IconMoon />
    </div>
  );
}
