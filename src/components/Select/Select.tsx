/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from './Select.module.scss';

type Props = {
  box: string | React.ReactElement;
  value: string;
  variant?: 'picked-correctly' | 'picked-incorrectly';
} & (
  | ({ as: 'div' } & React.HTMLAttributes<HTMLDivElement>)
  | ({ as: 'button' } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: 'radio' } & React.InputHTMLAttributes<HTMLInputElement>)
);
export default function Select(props: Props) {
  switch (props.as) {
    case 'div': {
      const { as, box, value, className, ...restProps } = props;

      return (
        <div
          className={`${styles.select} ${styles['select--div']} ${className || ''}`}
          {...restProps}
        >
          <span className={styles.selectBox}>{box}</span>
          <span>{value}</span>
        </div>
      );
    }
    case 'button': {
      const { as, box, value, className, ...restProps } = props;

      return (
        <button className={`${styles.select} ${className || ''}`} {...restProps}>
          <span className={styles.selectBox}>{box}</span>
          <span>{value}</span>
        </button>
      );
    }
    case 'radio': {
      const { as, id, box, value, ...restProps } = props;

      return (
        <label htmlFor={id} className={styles.select}>
          <input type="radio" id={id} value={value} className={styles.input} {...restProps} />
          <span className={styles.selectBox}>{box}</span>
          <span>{value}</span>
        </label>
      );
    }
  }
  return <></>;
}
