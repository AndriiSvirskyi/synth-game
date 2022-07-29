import styles from './startOwnNode.module.scss';
import AnimatedBackground from './AnimatedBackground';

export default function StartOwnNode(props: { isLight: boolean }) {
  return (
    <div className={`${styles.wrapper} ${props.isLight ? styles.light : ''}`}>
      <div className={styles.textBlockWrapper}>
        <div className={styles.backgroundStartEllipse} />
        <h3 className={styles.title}>
          Let's go <span className={styles.spanOne}>for the </span>{' '}
          <span className={styles.spanTwo}>future</span> with us!{' '}
          <span className={styles.titleTwo}>
            Let's make <span className={styles.spanOne}>Web 3.0!</span>
          </span>
        </h3>
        <p className={styles.subTitle}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <a
          href='https://github.com/Ghost-Drive/ghost-node'
          target='_blank'
          rel='noreferrer'
          className={`${styles.startNodeButton} ${
            props.isLight ? styles.light : ''
          }`}
        >
          <svg
            width='330'
            height='65'
            viewBox='0 0 330 65'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 1H310.983L329 14.7143V64H18.9766L1 52.2709V1Z'
              stroke={`${
                props.isLight ? '#0F73EF' : 'url(#paint0_linear_595_251)'
              }`}
              strokeWidth='2'
            />
            <mask id='path-1-inside-1_62_2036' fill='white'>
              <path d='M0 0H311.321L330 14.2188V65H18.6792L0 52.8125V0Z' />
            </mask>
            <path
              d='M0 0H311.321L330 14.2188V65H18.6792L0 52.8125V0Z'
              fill='url(#paint0_linear_62_2036)'
            />
            <defs>
              <linearGradient
                className={styles.hovered}
                id='paint0_linear_62_2036'
                x1='-12.8363'
                y1='1.25045e-05'
                x2='598.16'
                y2='59.8779'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor={`${props.isLight ? '#0F73EF' : '#025CF1'}`} />
                <stop
                  offset='0.384573'
                  stopColor={`${props.isLight ? '#0F73EF' : '#05F0FD'}`}
                />
                <stop
                  offset='1'
                  stopColor={`${props.isLight ? '#0F73EF' : '#7D48E4'}`}
                />
              </linearGradient>
              <linearGradient
                id='paint0_linear_595_251'
                x1='-64.4821'
                y1='-8.52827e-06'
                x2='151.24'
                y2='246.828'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#025CF1' />
                <stop offset='0.659146' stopColor='#05DDFE' />
                <stop offset='1' stopColor='#05F0FD' />
              </linearGradient>
            </defs>
          </svg>

          <div>Start your own Node</div>
        </a>
      </div>
      <AnimatedBackground />
    </div>
  );
}
