import styles from './AboutUs.module.scss';
import { ReactComponent as Icon } from '../../../assets/icons/iconInformationBlock.svg';
export default function AboutUs(props: { isLight: boolean }) {
  return (
    <div className={`${styles.wrapper} ${props.isLight ? styles.light : ''}`}>
      <p id='about-us' className={styles.title}>
        What <span>we</span> are doing
      </p>
      <div className={styles.informationBlocks}>
        <div className={styles.informationBlock}>
          <Icon className={styles.icon} />
          <p className={styles.titleBlock}>Store {`\n`} Secure Data</p>
          <span className={styles.description}>
            Use your avatar on Telegram and other compatible apps.
          </span>
        </div>
        <div className={styles.informationBlock}>
          <Icon className={styles.icon} />
          <p className={styles.titleBlock}>Convenient {`\n`} File Sharing</p>
          <span className={styles.description}>
            You get multi-factor approach to security, where authentication
            depends on five factors
          </span>
        </div>
        <div className={styles.informationBlock}>
          <Icon className={styles.icon} />
          <p className={styles.titleBlock}>Collaboration{`\n`} Opportunities</p>
          <span className={styles.description}>
            Thanks to the CPU you can download applications to the avatar
          </span>
        </div>
      </div>
      <div className={styles.aboutUsLines} />
    </div>
  );
}
