import { Scenes } from 'App';
import { BorderFocus } from 'components/BorderFocus';
import styles from './styles.module.scss';

type HeaderProps = {
  scene: { cur: Scenes; past: Scenes };
  setScene: React.Dispatch<React.SetStateAction<{ cur: Scenes; past: Scenes }>>;
};

export const Header = ({ setScene, scene }: HeaderProps) => {
  return (
    <>
      <div
        className={styles.synthButton}
        onClick={() => {
          setScene({ cur: Scenes.mainPage, past: scene.cur });
        }}
      >
        <BorderFocus
          width='170px'
          height='28px'
          hasBackground={scene.cur !== Scenes.connectWallet}
          hasHover={true}
        >
          <>Synth Game Platform</>
        </BorderFocus>
      </div>
      <div
        className={styles.connectWalletButton}
        onClick={() => {
          setScene({ cur: Scenes.connectWallet, past: scene.cur });
        }}
      >
        <BorderFocus
          width='170px'
          height='28px'
          hasBackground={scene.cur === Scenes.connectWallet}
          hasHover={true}
        >
          <>Connect Wallet</>
        </BorderFocus>
      </div>
    </>
  );
};
