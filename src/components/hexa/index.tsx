/* eslint-disable react/jsx-pascal-case */
import { LB_Hexa } from './LB_Hexa';
import { LT_Hexa } from './LT_Hexa';
import { RB_Hexa } from './RB_Hexa';
import styles from './styles.module.scss';
export const Hexa = ({ isSmall }: { isSmall?: boolean }) => {
  return (
    <div className={`${styles.hexaWrap} ${isSmall && styles.small}`}>
      <div className={styles.hexa}>
        <LB_Hexa />
        <LT_Hexa />
        <RB_Hexa />
      </div>
    </div>
  );
};
