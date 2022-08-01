import { Scenes } from 'App';
import styles from './styles.module.scss';
type BorderFocusProps = {
  children: JSX.Element;
  hasBackground?: boolean;
  width: string;
  height: string;
  hasHover?: boolean;
  animated?: boolean;
  isOpen?: boolean;
  callback?: () => void;
};
export const BorderFocus = ({
  children,
  hasBackground,
  width,
  height,
  hasHover,
  animated,
  isOpen,
  callback,
}: BorderFocusProps) => {
  return (
    <div
      className={`${styles.border} ${hasBackground && styles.black} ${
        animated && styles.animated
      } ${hasHover && styles.hover}`}
    >
      <div
        style={{ width: width, height: height }}
        className={`${styles.textWrap} `}
      >
        <div className={styles.text}>{children}</div>
      </div>
      {isOpen && (
        <div className={styles.close} onClick={callback}>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.75 4.754L4.75 4.754L4.75 0.753998'
              stroke='black'
              stroke-width='0.5'
            />
            <path d='M1 17L17 0.999999' stroke='black' stroke-width='0.5' />
            <path d='M14.5 14.5L17 12V17H12L14.5 14.5Z' fill='black' />
          </svg>
        </div>
      )}
    </div>
  );
};
