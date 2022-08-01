import appStyles from './App.module.css';
import { useState } from 'react';
import { Hexa } from 'components/hexa';
import { BorderFocus } from 'components/BorderFocus';
import { SynthGameInfo } from 'components/SynthGameInfo';
import { Header } from 'components/Header';
import { FirstBlock } from 'components/FirstBlock';
import { SecondBlock } from 'components/SecondBlock';
import { ConnectWallet } from 'components/ConnectWallet';

export enum Scenes {
  connectWallet,
  synthInfo,
  mainPage,
  first,
  second,
}

const App = () => {
  const [isLight, setIsLight] = useState(false);
  const [scene, setScene] = useState({
    cur: Scenes.mainPage,
    past: Scenes.mainPage,
  });
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  return (
    <div className={`${appStyles.app} ${isLight ? appStyles.light : ''}`}>
      <Header scene={scene} setScene={setScene} isWalletConnected={isWalletConnected}/>
      <SynthGameInfo scene={scene} setScene={setScene} />
      <FirstBlock scene={scene} setScene={setScene} />
      <SecondBlock scene={scene} setScene={setScene} />
      <ConnectWallet scene={scene} setScene={setScene} isWalletConnected={isWalletConnected} setIsWalletConnected={setIsWalletConnected}/>
    </div>
  );
};

export default App;
