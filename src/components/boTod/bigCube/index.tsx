import { CubeMode, CubeStatus } from '../cube.types';
import styles from './style.module.scss';
type BigCubeProps = {
  status: CubeStatus;
  mode: CubeMode;
};
export const BigCube = ({ status, mode }: BigCubeProps) => {
  return (
    <div className={`${styles.cube} ${styles[status]} ${styles[mode]}`}>
      <svg
        width='83'
        height='95'
        viewBox='0 0 83 95'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M41.8688 94.4674L0.947266 70.8584V23.6094L41.8688 47.2494V94.4674Z'
          className={`${styles.cubeY} ${styles[CubeStatus[status]]}`}
        />
        <path
          d='M82.7538 70.8584L41.8633 94.4674V47.2494L82.7538 23.6094V70.8584Z'
          className={`${styles.cubeX} ${styles[CubeStatus[status]]}`}
        />
        <path
          d='M41.8688 47.249L0.947266 23.609L41.8688 0L82.7593 23.609L41.8688 47.249Z'
          className={`${styles.cubeZ} ${styles[CubeStatus[status]]}`}
        />
        <path
          d='M41.8688 47.2494L0.947266 23.6094V25.6852L41.8688 49.2943L82.7593 25.6852V23.6094L41.8688 47.2494Z'
          fill='white'
        />
      </svg>
    </div>
  );
};
