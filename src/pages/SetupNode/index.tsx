import { CubeStatus } from 'components/boTod/cube.types';
import { useState } from 'react';
import { BoTodStore } from 'store/BoTodStore';
import { Steps } from './Steps';
import styles from './styles.module.scss';
const STEPS_COUNT = 2;
export const SetupNode = () => {
  const { changeStatuses } = BoTodStore;
  const [stepIndex, setStepIndex] = useState(0);
  return (
    <div className={styles.setup}>
      <div className={styles.steps}>
        <Steps index={stepIndex} />
      </div>
      {stepIndex > 0 && (
        <div
          onClick={() => {
            setStepIndex((count) => count - 1);
          }}
        >
          Prev
        </div>
      )}
      {stepIndex < STEPS_COUNT - 1 && (
        <div
          onClick={() => {
            setStepIndex((count) => count + 1);
          }}
        >
          Next
        </div>
      )}
      {stepIndex === STEPS_COUNT - 1 && <div>Finish</div>}
      <div
        className={styles.closeButton}
        onClick={() => {
          changeStatuses(
            {
              current: CubeStatus.appear,
              past: CubeStatus.disappear,
            },
            {
              current: CubeStatus.disappear,
              past: CubeStatus.waiting,
            }
          );
        }}
      ></div>
    </div>
  );
};
