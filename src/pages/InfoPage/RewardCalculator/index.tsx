import Calculator from './Calculator'
import styles from './styles.module.css';

export default function RewardCalculator(props: { isLight: boolean }) {
  return (
    <div className={styles.wrapper}>
      <div>
        <p id="calculator" className={`${styles.title} ${props.isLight ? styles.light : ''}`}><span>Reward</span> <span>Calculator</span> </p>
      </div>
      <Calculator isLight={props.isLight}/>
    </div>
  );
}
