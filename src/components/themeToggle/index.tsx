import { useState } from 'react';
import styles from './styles.module.scss';

enum Theme {
  dark = 'dark',
  light = 'light',
}

const proxyThemeVariable = {
  dark: Theme.light,
  light: Theme.dark,
};

export const ThemeToggle = (props: {setIsLight: any, isLight: boolean}) => {
  const [theme, setTheme] = useState<null | Theme>(null);
  return (
    <div
      className={`${styles.toggle} ${styles[!theme ? 'dark' : theme]}`}
      onClick={() => {
        props.setIsLight(!props.isLight);
        setTheme(theme === null ? Theme.light : proxyThemeVariable[theme]);
      }}
    >
      <div className={`${styles.moon}`}>
        <svg
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.0586 6.4824C10.9705 7.43563 10.6128 8.34407 10.0272 9.1014C9.44169 9.85874 8.65257 10.4336 7.75221 10.7589C6.85185 11.0841 5.87749 11.1461 4.94314 10.9378C4.00879 10.7295 3.15309 10.2593 2.47618 9.58243C1.79927 8.90552 1.32914 8.04983 1.1208 7.11548C0.912467 6.18113 0.974538 5.20677 1.29975 4.30641C1.62497 3.40605 2.19988 2.61693 2.95722 2.03138C3.71455 1.44584 4.62298 1.08809 5.57622 1C5.01813 1.75503 4.74957 2.68529 4.81939 3.62159C4.88922 4.55789 5.29278 5.43803 5.95668 6.10194C6.62058 6.76584 7.50072 7.1694 8.43703 7.23922C9.37333 7.30904 10.3036 7.04049 11.0586 6.4824Z'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
      <div className={`${styles.sun}`}>
        <svg
          width='12'
          height='12'
          viewBox='0 0 13 13'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M5.98209 0.850117C5.98184 1.13612 6.21348 1.36818 6.49948 1.36844C6.78549 1.3687 7.01755 1.13706 7.01781 0.851055L5.98209 0.850117ZM7.01784 0.812969C7.0181 0.526964 6.78646 0.294902 6.50045 0.294643C6.21445 0.294384 5.98239 0.526027 5.98213 0.812031L7.01784 0.812969ZM5.98212 12.1875C5.98212 12.4735 6.21397 12.7054 6.49998 12.7054C6.78598 12.7054 7.01783 12.4735 7.01783 12.1875H5.98212ZM7.01783 12.1716C7.01783 11.8856 6.78598 11.6538 6.49998 11.6538C6.21397 11.6538 5.98212 11.8856 5.98212 12.1716H7.01783ZM0.850117 7.01788C1.13612 7.01814 1.36818 6.7865 1.36844 6.50049C1.3687 6.21449 1.13706 5.98243 0.851055 5.98217L0.850117 7.01788ZM0.812969 5.98213C0.526964 5.98187 0.294902 6.21352 0.294643 6.49952C0.294384 6.78553 0.526027 7.01759 0.812031 7.01785L0.812969 5.98213ZM12.1875 7.01788C12.4735 7.01788 12.7054 6.78603 12.7054 6.50002C12.7054 6.21402 12.4735 5.98217 12.1875 5.98217V7.01788ZM12.1716 5.98217C11.8856 5.98217 11.6538 6.21402 11.6538 6.50002C11.6538 6.78603 11.8856 7.01788 12.1716 7.01788V5.98217ZM2.8711 10.8613C3.07352 10.6592 3.07381 10.3313 2.87176 10.1289C2.66971 9.92649 2.34182 9.92619 2.1394 10.1282L2.8711 10.8613ZM2.11245 10.1552C1.91003 10.3572 1.90973 10.6851 2.11178 10.8875C2.31383 11.0899 2.64172 11.0902 2.84414 10.8882L2.11245 10.1552ZM10.8878 2.84454C11.0901 2.6423 11.0901 2.31441 10.8878 2.11218C10.6856 1.90994 10.3577 1.90993 10.1555 2.11216L10.8878 2.84454ZM10.1443 2.12338C9.94202 2.32562 9.94202 2.65351 10.1442 2.85574C10.3465 3.05798 10.6744 3.05799 10.8766 2.85576L10.1443 2.12338ZM10.8612 10.1289C10.6592 9.92646 10.3313 9.92616 10.1289 10.1282C9.92645 10.3303 9.92615 10.6582 10.1282 10.8606L10.8612 10.1289ZM10.1551 10.8875C10.3572 11.0899 10.6851 11.0902 10.8875 10.8882C11.0899 10.6861 11.0902 10.3583 10.8881 10.1558L10.1551 10.8875ZM2.84449 2.11215C2.64225 1.90992 2.31436 1.90992 2.11213 2.11215C1.90989 2.31439 1.90989 2.64228 2.11213 2.84451L2.84449 2.11215ZM2.12335 2.85573C2.32558 3.05797 2.65347 3.05797 2.85571 2.85573C3.05794 2.6535 3.05794 2.32561 2.85571 2.12337L2.12335 2.85573ZM9.23212 6.5C9.23212 8.00892 8.0089 9.23214 6.49998 9.23214V10.2679C8.58091 10.2679 10.2678 8.58093 10.2678 6.5H9.23212ZM6.49998 9.23214C4.99105 9.23214 3.76783 8.00892 3.76783 6.5H2.73212C2.73212 8.58093 4.41904 10.2679 6.49998 10.2679V9.23214ZM3.76783 6.5C3.76783 4.99108 4.99105 3.76786 6.49998 3.76786V2.73214C4.41904 2.73214 2.73212 4.41907 2.73212 6.5H3.76783ZM6.49998 3.76786C8.0089 3.76786 9.23212 4.99108 9.23212 6.5H10.2678C10.2678 4.41907 8.58091 2.73214 6.49998 2.73214V3.76786ZM7.01781 0.851055L7.01784 0.812969L5.98213 0.812031L5.98209 0.850117L7.01781 0.851055ZM7.01783 12.1875V12.1716H5.98212V12.1875H7.01783ZM0.851055 5.98217L0.812969 5.98213L0.812031 7.01785L0.850117 7.01788L0.851055 5.98217ZM12.1875 5.98217H12.1716V7.01788H12.1875V5.98217ZM2.1394 10.1282L2.11245 10.1552L2.84414 10.8882L2.8711 10.8613L2.1394 10.1282ZM10.1555 2.11216L10.1443 2.12338L10.8766 2.85576L10.8878 2.84454L10.1555 2.11216ZM10.1282 10.8606L10.1551 10.8875L10.8881 10.1558L10.8612 10.1289L10.1282 10.8606ZM2.11213 2.84451L2.12335 2.85573L2.85571 2.12337L2.84449 2.11215L2.11213 2.84451Z' />
        </svg>
      </div>
      <div className={`${styles.toggleCircle} ${theme && styles[theme]}`}></div>
    </div>
  );
};