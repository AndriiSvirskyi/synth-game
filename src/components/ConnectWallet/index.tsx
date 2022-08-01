import { Scenes } from 'App';
import styles from './styles.module.scss';
import { BorderFocus } from 'components/BorderFocus';
//@ts-ignore
// import Hexa from '../../assets/hexa.png';
//@ts-ignore
import Fox from '../../assets/metamaskFox.png';
import Arrows from '../../assets/arrows.svg';
import { useState } from 'react';
import { ethers } from 'ethers';
import { Hexa } from 'components/hexa';

export const ConnectWallet = ({
  scene,
  setScene,
  isWalletConnected,
  setIsWalletConnected,
}: {
  scene: { cur: Scenes; past: Scenes };
  setScene: React.Dispatch<React.SetStateAction<{ cur: Scenes; past: Scenes }>>;
  isWalletConnected: boolean;
  setIsWalletConnected: any;
}) => {
  const [isDataHidden, setIsDataHidden] = useState(false)
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [defaultAccount, setDefaultAccount] = useState<any>(null);
  const [userBalance, setUserBalance] = useState<any>(null);
  let metamaskDoc: any = ''
  //@ts-ignore
  const ethereum = window.ethereum;

  const connectWalletHandler = () => {
    if (ethereum && ethereum.isMetaMask) {
      ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((result: any[]) => {
          accountChangedHandler(result[0]);
          getAccountBalance(result[0]);
          setIsWalletConnected(true);
          setErrorMessage(null);
        })
        .catch((error: { message: any }) => { 
          setErrorMessage(error.message);
        });
    } else {
      setErrorMessage(<a href="https://metamask.io/download/" target="_blank">Please, install MetaMask browser extension to interact.</a>);
    }
  };

  const accountChangedHandler = (newAccount: any) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount.toString());
  };

  const getAccountBalance = (account: any) => {
    ethereum
      .request({ method: 'eth_getBalance', params: [account, 'latest'] })
      .then((balance: any) => {
        setUserBalance(ethers.utils.formatEther(balance));
        setErrorMessage(null);
      })
      .catch((error: { message: any }) => {
        setErrorMessage(error.message);
      });
  };

  if (ethereum) {
    ethereum.on('accountsChanged', accountChangedHandler);
  }

  return (
    <div>
      {scene.cur === Scenes.connectWallet && (
        <>
        <div className={`${styles.hexa} ${isWalletConnected ? styles.transformHexa : ''} ${isDataHidden? styles.hexaToRight : ''}`} >
          <Hexa/>
        </div>
          {!isWalletConnected ? (
            <div>
              <div className={styles.wrapper}>
                <img className={styles.arrow} src={Arrows} alt='Arrows' />
                <img
                  className={styles.metamaskLogo}
                  width='68'
                  src={Fox}
                  alt='Metamask'
                  onClick={() => {
                    connectWalletHandler();
                  }}
                />
              </div>
              <span className={styles.error}>{errorMessage}</span>
            </div>
          ) : (
            <div className={`${styles.metamaskWrapper} ${isDataHidden ? styles.hide : ''}`}>
              <div
                className={styles.close}
                onClick={() => {
                  setIsDataHidden(true);
                  setTimeout(()=> {
                    setScene({ cur: Scenes.mainPage, past: scene.cur });
                    setIsDataHidden(false);
                  }, 500)
                }}
              >
                <svg width='18'  height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' >
                  <path d='M0.75 4.754L4.75 4.754L4.75 0.753998' stroke='black' stroke-width='0.5' />
                  <path d='M1 17L17 0.999999' stroke='black' stroke-width='0.5' />
                  <path d='M14.5 14.5L17 12V17H12L14.5 14.5Z' fill='black' />
                </svg>
              </div>
              <div className={styles.metamaskData}>
                <div className={styles.data}>
                  <span className={styles.label}> Wallet Balance </span>
                  <span className={styles.value}>{userBalance} ETH</span>
                </div>
                <div className={styles.data}>
                  <span className={styles.label}>Shares</span>
                  <span className={styles.value}>
                    <span className={styles.leftBracket}></span>0.4567 %
                  </span>
                </div>
                <div className={styles.data}>
                  <span className={styles.label}> Tokens Amount </span>
                  <span className={styles.value}>
                    <span className={styles.leftBracket}></span>1213.21 SGP
                  </span>
                </div>
                <div className={styles.data}>
                  <span className={styles.label}>Price </span>
                  <span className={styles.value}>3.4467 ETH</span>
                </div>
                <div
                  className={styles.confirmButton}
                  onClick={() => {
                    setScene({ cur: Scenes.mainPage, past: scene.cur });
                  }}
                >
                  <BorderFocus width='127px' height='28px' hasBackground={true}  hasHover={true} >
                    <>Confirm</>
                  </BorderFocus>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
