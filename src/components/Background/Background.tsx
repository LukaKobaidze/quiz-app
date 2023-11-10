import imageBackgroundDark from '@/assets/images/pattern-background-desktop-dark.svg';
import styles from './Background.module.scss';

interface Props {}

export default function Background(props: Props) {
  return <img src={imageBackgroundDark} alt="" className={styles.background} draggable={false} />;
}
