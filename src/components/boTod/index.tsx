import { BigCube } from './bigCube';
import {
  CubeMode,
  CubeStatus,
  MediumCubeName,
  SmallCubeName,
} from './cube.types';
import { MediumCube } from './mediumCube';
import { SmallCube } from './smallCube';
import styles from './style.module.scss';

type AnimationProps = {
  statuses: {
    current: CubeStatus;
    past: CubeStatus;
  };
  isFixed?: boolean;
};

type Modes = {
  [key in CubeStatus]: CubeMode;
};

const MODES: Modes = {
  error: CubeMode.afterError,
  loading: CubeMode.afterLoading,
  waiting: CubeMode.afterWaiting,
  success: CubeMode.afterSuccess,
  disappear: CubeMode.afterWaiting,
  appear: CubeMode.afterWaiting,
  grab: CubeMode.afterWaiting,
};

const PortalsModes = {
  [CubeStatus.appear]: true,
  [CubeStatus.disappear]: true,
  [CubeStatus.waiting]: false,
  [CubeStatus.error]: false,
  [CubeStatus.success]: false,
  [CubeStatus.loading]: false,
  [CubeStatus.grab]: false,
};

export const BoTod = ({ statuses, isFixed }: AnimationProps) => {
  const { past } = statuses;
  console.log('PortalsModes[statuses.current]', PortalsModes[statuses.current]);
  console.log(
    'statuses.current',
    statuses,
    statuses.past === CubeStatus.disappear &&
      statuses.current === CubeStatus.appear
  );
  return (
    <div
      className={`${styles.boTod} ${isFixed && styles.fixed} ${
        statuses.current === CubeStatus.grab && styles.moving
      }`}
    >
      <div className={styles.cubes}>
        <BigCube status={statuses.current} mode={MODES[statuses.past]} />
        <MediumCube
          type={MediumCubeName.T}
          status={statuses.current}
          mode={MODES[past]}
        />
        <MediumCube
          type={MediumCubeName.R}
          status={statuses.current}
          mode={MODES[past]}
        />
        <MediumCube
          type={MediumCubeName.B}
          status={statuses.current}
          mode={MODES[past]}
        />
        <MediumCube
          type={MediumCubeName.L}
          status={statuses.current}
          mode={MODES[past]}
        />
        <SmallCube
          type={SmallCubeName.LT}
          status={statuses.current}
          mode={MODES[past]}
        />
        <SmallCube
          type={SmallCubeName.RT}
          status={statuses.current}
          mode={MODES[past]}
        />
        <SmallCube
          type={SmallCubeName.LB}
          status={statuses.current}
          mode={MODES[past]}
        />
        <SmallCube
          type={SmallCubeName.RB}
          status={statuses.current}
          mode={MODES[past]}
        />
      </div>
      {statuses.current === CubeStatus.appear && (
        <div className={styles.portal} />
      )}
      {statuses.current === CubeStatus.disappear && (
        <div className={styles.portal} />
      )}
    </div>
  );
};
