import { useState } from 'react';
import AboutUs from './AboutUs/AboutUs';
import { CheckNode } from './CheckNode/CheckNode';
import styles from './InfoPage.module.css';
import NodeStatistic from './NodeStatistic/NodeStatistic';
import RewardCalculator from './RewardCalculator';
import StartOwnNode from './StartOwnNode/StartOwnNode';
import { ReactComponent as Scroll } from '../../assets/img/scroll.svg';
import { ReactComponent as ArrowTop } from '../../assets/img/scrollArrowTop.svg';
import { ReactComponent as ArrowBottom } from '../../assets/img/scrollArrowBottom.svg';

export default function InfoPage(props: { isLight: boolean }) {
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 200) {
      setIsScrollVisible(true);
    } else {
      setIsScrollVisible(false);
    }
  });

  return (
    <div className={styles.content}>
      <StartOwnNode isLight={props.isLight} />
      <NodeStatistic isLight={props.isLight} />
      <CheckNode isLight={props.isLight} />
      <RewardCalculator isLight={props.isLight} />
      <AboutUs isLight={props.isLight} />
      <button
        className={`${styles.scrollToHeader} ${
          isScrollVisible ? styles.show : styles.hide
        }`}
        onClick={() => {
          document
            .getElementById('header')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div
          className={`${styles.scrollContainer} ${
            props.isLight ? styles.light : ''
          }`}
        >
          <Scroll className={styles.scroll} />
          <ArrowTop className={styles.scroll} />
          <ArrowBottom className={styles.scroll} />
        </div>
      </button>
    </div>
  );
}
