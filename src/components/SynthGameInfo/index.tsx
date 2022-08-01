import { Scenes } from 'App';
import { BorderFocus } from 'components/BorderFocus';
import { Hexa } from 'components/hexa';
import styles from './styles.module.scss';
export const SynthGameInfo = ({
  scene,
  setScene,
}: {
  scene: { cur: Scenes; past: Scenes };
  setScene: React.Dispatch<React.SetStateAction<{ cur: Scenes; past: Scenes }>>;
}) => {
  const isActive = scene.cur === Scenes.synthInfo;
  if (scene.cur === Scenes.connectWallet) {
    return <></>;
  }
  return (
    <div>
      <div
        className={`${styles.synthInfoText} ${
          isActive ? styles.active : styles.back
        }`}
        onClick={() => {
          if (scene.cur !== Scenes.synthInfo) {
            setScene({ cur: Scenes.synthInfo, past: scene.past });
          }
        }}
      >
        <BorderFocus
          height={isActive ? '320px' : '60px'}
          width={isActive ? '540px' : '100px'}
          hasHover={scene.cur !== Scenes.synthInfo}
          animated={isActive && true}
          isOpen={isActive}
          callback={() => {
            setScene({ cur: Scenes.mainPage, past: scene.cur });
          }}
        >
          {isActive ? (
            <div className={styles.description}>
              <div>What is Synth game platform?</div>
              <div>
                Synth game platform is a permanent virtual space in which people
                can interact with each other and with digital objects through
                their avatars, using VR technology, conventional browsers, etc
                on desktop and mobile platforms. Property rights and accounts
                are legally registered through NFT tokens.
              </div>
              <div>
                The main objective of the platform is to unite game developers,
                their projects, and players into an ecosystem based on new
                generation IPFS.
              </div>
              <div>
                The processing of game data can be carried out by the “client
                application” on the device (PC), and the computational power of
                the platform.
              </div>
            </div>
          ) : (
            <>WHAT IS SYNTH GAME PLATFORM</>
          )}
        </BorderFocus>
      </div>
      <div
        className={`${styles.synthInfoHexa} ${isActive && styles.animatedHexa}`}
      >
        <Hexa />
      </div>
    </div>
  );
};
