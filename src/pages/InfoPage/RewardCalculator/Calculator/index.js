import { useState } from 'react';
import Slider from '../../../../components/Slider';
import RewardLabel from '../RewardLabel';
import styles from './styles.module.scss';

function Reward({ isLight }) {
  const [state, setState] = useState({ speed: 10, size: 37 });
  const changeSize = (value) => {
    setState({
      ...state,
      size: value,
    });
  };

  const changeSpeed = (value) => {
    setState({
      ...state,
      speed: value,
    });
  };

  return (
    <div className={`${styles.container} ${isLight ? styles.light : ''}`}>
      <h2 className={styles.title}>Calculate your reward</h2>
      <div className={styles.reward}>
        <div className={styles.rewardSliders}>
          <Slider
            initialValue={state.size}
            barsCount={30}
            maxValue={50}
            title='Storage'
            titleSize='50 GB'
            onChange={changeSize}
            isLight={isLight}
          />
          <Slider
            initialValue={state.speed}
            barsCount={30}
            maxValue={50}
            title='Speed'
            titleSize='50 Mb/s'
            onChange={changeSpeed}
            isLight={isLight}
          />
        </div>
      </div>
      <RewardLabel isLight={isLight}>
        {/* { `${state.size}  * ${state.speed} = ${state.speed * state.size}` } */}
        {`${state.speed * state.size} GXD`}
      </RewardLabel>
    </div>
  );
}

export default Reward;
