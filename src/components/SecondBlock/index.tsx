import { Scenes } from 'App';
import { BorderFocus } from 'components/BorderFocus';
import { Hexa } from 'components/hexa';
import styles from './styles.module.scss';

type SecondBlockProps = {
  scene: { cur: Scenes; past: Scenes };
  setScene: React.Dispatch<React.SetStateAction<{ cur: Scenes; past: Scenes }>>;
};

export const SecondBlock = ({ scene, setScene }: SecondBlockProps) => {
  const isActive = scene.cur === Scenes.second;
  if (scene.cur === Scenes.connectWallet) {
    return <></>;
  }
  return (
    <div
      className={`${styles.second} ${
        scene.cur === Scenes.synthInfo && styles.disappear
      } ${
        scene.past === Scenes.second &&
        scene.cur === Scenes.mainPage &&
        styles.appear
      }`}
    >
      <Hexa isSmall={true} />
      <div className={styles.textBlock}>
        <BorderFocus
          height={isActive ? '320px' : '32px'}
          width={isActive ? '540px' : '120px'}
          hasHover={scene.cur !== Scenes.second}
          animated={isActive && true}
          isOpen={isActive}
          callback={() => {
            setScene({ cur: Scenes.mainPage, past: scene.cur });
          }}
        >
          <div className={styles.text}>Some test Text</div>
        </BorderFocus>
      </div>
    </div>
  );
};
