import styles from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: Props) {
  const { disabled, className, children, ...restProps } = props;

  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabled : ''} ${
        className || ''
      }`}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
}
