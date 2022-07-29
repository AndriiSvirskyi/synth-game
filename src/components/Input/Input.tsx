import { useState } from 'react';
import styles from './input.module.scss';

type InputProps = {
  type: string;
  placeholder: string;
  textButton?: string;
  onClick?: () => void;
  onChange?: (e: any) => void;
  value?: string;
  inFooter?: boolean;
  errorMessage?: string;
  isLight: boolean;
};

export default function Input({
  type,
  placeholder,
  textButton,
  onClick,
  onChange,
  value,
  inFooter,
  errorMessage,
  isLight
}: InputProps) {
  const [inFocus, setFocus] = useState(true);
  const [error, setError] = useState(true);

  return (
    <div
      className={`${styles.inputWrapper} ${
        inFocus && styles[`wrapperFocus-${type}`]
      } ${error && styles[`wrapper-${type}`]}
        ${isLight ? styles.light : ''}
      `}
    >
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={` ${styles.input} ${inFooter ? styles.footer : ''} ${
          error && styles[`input-${type}`]
        }`}
        onBlur={() => setFocus(true)}
        onFocus={() => setFocus(true)}
      />
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
}
