import styles from './Map.module.css';
import { ReactComponent as BigBlueCircleOne } from './assets/bigBlueCircleOne.svg';
import { ReactComponent as BigBlueCircleTwo } from './assets/bigBlueCircleTwo.svg';
import { ReactComponent as BigBlueCircleThree } from './assets/bigBlueCircleThree.svg';

import { ReactComponent as MediumBlueCircleOne } from './assets/mediumBlueCircleOne.svg';
import { ReactComponent as MediumBlueCircleTwo } from './assets/mediumBlueCircleTwo.svg';
import { ReactComponent as MediumBlueCircleThree } from './assets/mediumBlueCircleThree.svg';

import { ReactComponent as SmallBlueCircleOne } from './assets/smallBlueCircleOne.svg';
import { ReactComponent as SmallBlueCircleTwo } from './assets/smallBlueCircleTwo.svg';
import { ReactComponent as SmallBlueCircleThree } from './assets/smallBlueCircleThree.svg';

import { ReactComponent as BigWhiteCircleOne } from './assets/bigWhiteCircleOne.svg';
import { ReactComponent as BigWhiteCircleTwo } from './assets/bigWhiteCircleTwo.svg';
import { ReactComponent as BigWhiteCircleThree } from './assets/bigWhiteCircleThree.svg';

import { ReactComponent as MediumWhiteCircleOne } from './assets/mediumWhiteCircleOne.svg';
import { ReactComponent as MediumWhiteCircleTwo } from './assets/mediumWhiteCircleTwo.svg';
import { ReactComponent as MediumWhiteCircleThree } from './assets/mediumWhiteCircleThree.svg';

import { ReactComponent as SmallWhiteCircleOne } from './assets/smallWhiteCircleOne.svg';
import { ReactComponent as SmallWhiteCircleTwo } from './assets/smallWhiteCircleTwo.svg';
import { ReactComponent as SmallWhiteCircleThree } from './assets/smallWhiteCircleThree.svg';

export default function Map(props: {isLight:boolean}) {
  return (
    <div className={`${styles.map} ${props.isLight ? styles.light : ''}`}>
      <div style={{top: '20%', left: '3%'}} className={`${styles.locator} ${styles.blue} ${props.isLight ? styles.light : ''} `}>
        <BigBlueCircleTwo className={styles.circle}/>
        <BigBlueCircleThree className={styles.circle}/>
        <BigBlueCircleOne className={styles.circle}/>
      </div>
      <div style={{top: '10%', left: '60%'}} className={`${styles.locator} ${styles.blue} ${props.isLight ? styles.light : ''}`}>
        <MediumBlueCircleTwo className={styles.circle}/>
        <MediumBlueCircleThree className={styles.circle}/>
        <MediumBlueCircleOne className={styles.circle}/>
      </div>
      <div style={{top: '25%', left: '50%'}} className={`${styles.locator} ${styles.blue} ${props.isLight ? styles.light : ''}`}>
        <SmallBlueCircleTwo className={styles.circle}/>
        <SmallBlueCircleThree className={styles.circle}/>
        <SmallBlueCircleOne className={styles.circle}/>
      </div>
      <div style={{top: '50%', left: '50%'}} className={`${styles.locator} ${styles.blue} ${props.isLight ? styles.light : ''}`}>
        <BigBlueCircleTwo className={styles.circle}/>
        <BigBlueCircleThree className={styles.circle}/>
        <BigBlueCircleOne className={styles.circle}/>
      </div>
      <div style={{top: '30%', left: '10%'}} className={`${styles.locator} ${styles.blue} ${props.isLight ? styles.light : ''}`}>
        <MediumBlueCircleTwo className={styles.circle}/>
        <MediumBlueCircleThree className={styles.circle}/>
        <MediumBlueCircleOne className={styles.circle}/>
      </div>
      <div style={{top: '35%', left: '74%'}} className={`${styles.locator} ${styles.blue} ${props.isLight ? styles.light : ''}`}>
        <SmallBlueCircleTwo className={styles.circle}/>
        <SmallBlueCircleThree className={styles.circle}/>
        <SmallBlueCircleOne className={styles.circle}/>
      </div>
      <div style={{top: '40%', left: '45%'}} className={`${styles.locator} ${styles.white}  ${props.isLight ? styles.light : ''}`}>
        <BigWhiteCircleTwo className={styles.circle}/>
        <BigWhiteCircleThree className={styles.circle}/>
        <BigWhiteCircleOne className={styles.circle}/>
      </div>
      <div style={{top: '10%', left: '10%'}} className={`${styles.locator} ${styles.white}  ${props.isLight ? styles.light : ''}`}>
        <MediumWhiteCircleTwo className={styles.circle}/>
        <MediumWhiteCircleThree className={styles.circle}/>
        <MediumWhiteCircleOne className={styles.circle}/>
      </div>
      <div style={{top: '20%', left: '67%'}} className={`${styles.locator} ${styles.white}  ${props.isLight ? styles.light : ''}`}>
        <SmallWhiteCircleTwo className={styles.circle}/>
        <SmallWhiteCircleThree className={styles.circle}/>
        <SmallWhiteCircleOne className={styles.circle}/>
      </div>
      <div style={{top: '5%', left: '30%'}} className={`${styles.locator} ${styles.white}  ${props.isLight ? styles.light : ''}`}>
        <BigWhiteCircleTwo className={styles.circle}/>
        <BigWhiteCircleThree className={styles.circle}/>
        <BigWhiteCircleOne className={styles.circle}/>
      </div>
      <div style={{top: '25%', left: '25%'}} className={`${styles.locator} ${styles.white}  ${props.isLight ? styles.light : ''}`}>
        <MediumWhiteCircleTwo className={styles.circle}/>
        <MediumWhiteCircleThree className={styles.circle}/>
        <MediumWhiteCircleOne className={styles.circle}/>
      </div>
      <div style={{top: '45%', left: '40%'}} className={`${styles.locator} ${styles.white}  ${props.isLight ? styles.light : ''}`}>
        <SmallWhiteCircleTwo className={styles.circle}/>
        <SmallWhiteCircleThree className={styles.circle}/>
        <SmallWhiteCircleOne className={styles.circle}/>
      </div>
    </div>
  );
}
