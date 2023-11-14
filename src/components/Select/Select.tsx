/* eslint-disable @typescript-eslint/no-unused-vars */
import { IconCorrect, IconIncorrect } from '@/assets/images';
import styles from './Select.module.scss';

type Props = {
  box: string | React.ReactElement;
  value: string;
} & (
  | ({ as: 'div' } & React.HTMLAttributes<HTMLDivElement>)
  | ({ as: 'button' } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      as: 'radio';
      isCorrect?: boolean;
      variant?: 'selected' | 'picked-correctly' | 'picked-incorrectly';
    } & React.InputHTMLAttributes<HTMLInputElement>)
);
export default function Select(props: Props) {
  switch (props.as) {
    case 'div': {
      const { as, box, value, className, ...restProps } = props;

      return (
        <div
          className={`${styles.select} ${styles['select-div']} ${className || ''}`}
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
      const { as, id, box, value, variant, isCorrect, ...restProps } = props;

      return (
        <label
          htmlFor={id}
          className={`${styles.select} ${styles['select-radio']} ${
            styles[`select-radio--${variant}`]
          }`}
        >
          <input
            type="radio"
            id={id}
            value={value}
            className={styles.input}
            {...restProps}
          />
          <span className={styles.selectBox}>{box}</span>
          <span>{value}</span>
          {isCorrect ? (
            <IconCorrect className={styles.icon} />
          ) : variant === 'picked-incorrectly' ? (
            <IconIncorrect className={styles.icon} />
          ) : null}
        </label>
      );
    }
  }
  return <></>;
}
