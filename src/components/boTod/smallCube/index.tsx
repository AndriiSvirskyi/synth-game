import { CubeMode, CubeStatus, SmallCubeName } from '../cube.types';
import styles from './style.module.scss';

type SmallCubeProps = {
  status: CubeStatus;
  mode: CubeMode;
  type: SmallCubeName;
};

export const SmallCube = ({ status, type, mode }: SmallCubeProps) => {
  return (
    <div
      className={`${styles.cube} ${styles[type]} ${styles[status]} ${styles[mode]}`}
    >
      <svg
        width='43'
        height='50'
        viewBox='0 0 43 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M21.7596 49.1779L0.654297 36.9855V12.6328L21.7596 24.8092V49.1779Z'
          className={`${styles.cubeY} ${styles[CubeStatus[status]]}`}
        />
        <path
          d='M42.8491 36.9855L21.7598 49.1779V24.8092L42.8491 12.6328V36.9855Z'
          className={`${styles.cubeX} ${styles[CubeStatus[status]]}`}
        />
        <path
          d='M21.7596 24.8082L0.654297 12.6318L21.7596 0.439453L42.8489 12.6318L21.7596 24.8082Z'
          className={`${styles.cubeZ} ${styles[CubeStatus[status]]}`}
        />
        <path
          d='M21.7596 24.8092L0.654297 12.6328V13.6875L21.7596 25.8638L42.8489 13.6875V12.6328L21.7596 24.8092Z'
          fill='white'
        />
      </svg>
    </div>
  );
};
