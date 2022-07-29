import { CubeMode, CubeStatus, MediumCubeName } from '../cube.types';
import styles from './style.module.scss';

type MediumCubeProps = {
  status: CubeStatus;
  mode: CubeMode;
  type: MediumCubeName;
};

export const MediumCube = ({ status, type, mode }: MediumCubeProps) => {
  return (
    <div
      className={`${styles.cube} ${styles[type]} ${styles[status]} ${
        styles[CubeMode[mode]]
      }`}
    >
      <svg
        width='69'
        height='79'
        viewBox='0 0 69 79'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M34.6853 78.8345L0.962891 59.3789V20.4678L34.6853 39.9234V78.8345Z'
          className={`${styles.cubeY} ${styles[CubeStatus[status]]}`}
        />
        <path
          d='M68.3824 59.3799L34.6855 78.8354V39.9243L68.3824 20.4688V59.3799Z'
          className={`${styles.cubeX} ${styles[CubeStatus[status]]}`}
        />
        <path
          d='M34.6852 39.923L0.962891 20.4674L34.6852 0.986328L68.3821 20.4674L34.6852 39.923Z'
          className={`${styles.cubeZ} ${styles[CubeStatus[status]]}`}
        />
        <path
          d='M34.6852 39.9234L0.962891 20.4678V22.1529L34.6852 41.6085L68.3821 22.1529V20.4678L34.6852 39.9234Z'
          fill='white'
        />
      </svg>
    </div>
  );
};
