import styles from './Heading.module.scss';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  variant: 'L-bold' | 'L-regular' | 'M' | 'S';
  level: '1' | '2' | '3' | '4' | '5' | '6';
}

export default function Heading(props: Props) {
  const { variant, level, className, children, ...restProps } = props;

  const LevelHeading: keyof JSX.IntrinsicElements = `h${level}`;

  return (
    <LevelHeading
      className={`${styles.heading} ${styles[`heading--${variant}`]} ${
        className || ''
      }`}
      {...restProps}
    >
      {children}
    </LevelHeading>
  );
}
