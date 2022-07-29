import styles from './button.module.scss';

export enum ButtonState {
  disabled = 'disabled',
  primary = 'primary',
  error = 'error',
  success = 'success',
  loading = 'loading',
}

type ButtonProps = {
  onClick?: () => void;
  inInput?: boolean;
  state: ButtonState;
  text?: string;
  width?: string;
  height?: string;
  inFooter?: boolean;
  isLight: boolean;
};

export default function Button({
  onClick,
  inInput,
  state,
  text,
  width,
  height,
  inFooter,
  isLight,
}: ButtonProps) {

  const types: any = {
    disabled: {
      first: '#7E8A9F',
      second: '#7E8A9F',
    },
    primary: {
      first: isLight ? '#0F73EF' : '#025CF1',
      second: isLight ? '#0F73EF' : '#05DDFE',
    },
    loading: {
      first: isLight ? '#0F73EF' : '#025CF1',
      second: isLight ? '#0F73EF' : '#05DDFE',
    },
    success: {
      first: isLight ? '#11E14BF0' : '#0F7C34',
      second: isLight ? '#0ADAA8F0' : '#05FE4B',
    },
    error: {
      first: '#E13333F0',
      second: '#FF823CF0',
    },
  };

  return (
    <div
      style={{
        //@ts-ignore
        '--color-before': `linear-gradient(90.31deg, ${types[state].second} 6.26%, ${types[state].first} 118.81%)`,
        '--color-after': `linear-gradient(90.31deg, ${types[state].first} 6.26%, ${types[state].second} 118.81%)`,
        '--width': '180px',
      }}
    >
      <div
        onClick={onClick}
        className={`${styles.button_container} ${
          inFooter ? styles.footer : ''
        } ${styles.buttonBorder}  ${
          state === 'disabled' ? styles.disabled : ''
        }  ${state === 'loading' ? styles.loading : ''} ${
          inInput ? styles.inInput : ''
        }`}
      >
        <svg
          className={styles.button}
          width={width || '180'}
          height={height || '65'}
          viewBox='0 0 180 65'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.5 0.5H167.995L179.5 12.3923V64.5H10.774L0.5 53.1126V0.5Z'
            fill={`url(#paint0_linear_437_346${state})`}
            fillOpacity={isLight ? '1' : '0.94'}
            stroke={`url(#paint1_linear_437_346${state})`}
          />
          <defs>
            <linearGradient
              id={`paint0_linear_437_346${state}`}
              x1='11.6129'
              y1='-18.2812'
              x2='215.256'
              y2='-15.1967'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor={types[state].second} />
              <stop offset='1' stopColor={types[state].first} />
            </linearGradient>
            <linearGradient
              id={`paint1_linear_437_346${state}`}
              x1='-35.172'
              y1='-8.52827e-06'
              x2='160.375'
              y2='122.042'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor={types[state].first} />
              <stop offset='0.659146' stopColor={types[state].second} />
              <stop offset='1' stopColor={types[state].second} />
            </linearGradient>
          </defs>
        </svg>
        <div
          className={`${styles.button_text} ${inFooter ? styles.footer : ''} ${
            styles.glitch
          }`}
        >
          <span>
            {state === 'disabled' || state === 'primary' ? text : state}
          </span>
          {state === 'disabled' || state === 'primary' ? text : state}
          <span>
            {state === 'disabled' || state === 'primary' ? text : state}
          </span>
          {state === 'loading' && (
            <div className={styles.dots}>
              <div className={`${styles.first} ${styles.dot}`}>.</div>
              <div className={`${styles.second} ${styles.dot}`}>.</div>
              <div className={`${styles.third} ${styles.dot}`}>.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
