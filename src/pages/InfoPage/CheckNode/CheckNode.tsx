import { useState, useEffect } from 'react';
import Button, { ButtonState } from '../../../components/Button/Button';
import { observer } from 'mobx-react-lite';
import Input from '../../../components/Input/Input';
import styles from './CheckNode.module.scss';
import Traffic from './Traffic';
import { api } from '../../../api/api';
import { CubeStatus } from 'components/boTod/cube.types';
import { BoTod } from 'components/boTod';
import { BoTodStore } from 'store/BoTodStore';

type Statuses = {
  past: CubeStatus;
  current: CubeStatus;
};

type Peers = {
  Addr: string;
  Peer: string;
  Latency: string;
  Muxer: string;
  Direction: number;
  Streams: any;
};

const proxyCubeButtonType = {
  loading: 'loading',
  error: 'error',
  waiting: 'primary',
  success: 'success',
  disappear: 'primary',
  appear: 'primary',
  grab: 'primary',
};

export const CheckNode = observer((props: { isLight: boolean }) => {
  const { staticBoTod, changeStaticStatus } = BoTodStore;
  const [peers, setPeers] = useState<Peers[]>([]);
  const [peerID, setPeerID] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    api.get('ipfs/peers').then((response) => {
      setPeers(response.data);
    });
  }, []);

  const getTraffic = () => {
    if (!inputValue.length) {
      setErrorMessage('Input is empty');
      changeStaticStatus({
        past: CubeStatus.loading,
        current: CubeStatus.error,
      });
      return;
    }
    changeStaticStatus({
      past: staticBoTod.current,
      current: CubeStatus.loading,
    });
    setTimeout(() => {
      for (let i = 0; i < peers?.length; i++) {
        if (inputValue === peers[i].Peer) {
          // 12D3KooWNRR64X2Z45c4u86x3U47VrLBRyeGMa6AxWhxsuBTnc4E
          changeStaticStatus({
            past: CubeStatus.success,
            current: CubeStatus.success,
          });
          setPeerID(peers[i].Peer);
          return;
        }
      }
      setErrorMessage('Node Public key entered incorrectly');
      changeStaticStatus({
        past: CubeStatus.loading,
        current: CubeStatus.error,
      });
    }, 4000);
  };
  return (
    <div>
      <div
        className={`${styles.gridWrapper} ${props.isLight ? styles.light : ''}`}
      >
        <div className={styles.checkBlock}>
          <div>
            <p id='your-node' className={styles.titleOne}>
              <span className={styles.spanOne}>Check</span> your{' '}
              <span className={styles.spanTwo}>Node</span>
            </p>
            <p className={styles.titleTwo}>statistic and rewards</p>
          </div>
          <div className={styles.inputContainer}>
            <Input
              isLight={props.isLight}
              value={inputValue}
              errorMessage={errorMessage}
              onChange={(e: any) => {
                if (staticBoTod.current !== CubeStatus.waiting) {
                  setErrorMessage('');
                  changeStaticStatus({
                    past: staticBoTod.current,
                    current: CubeStatus.waiting,
                  });
                }
                setInputValue(e.target.value);
              }}
              type={proxyCubeButtonType[staticBoTod.current]}
              placeholder='Enter your Node Public key'
              textButton='Check'
            />
            <Button
              isLight={props.isLight}
              onClick={getTraffic}
              inInput={true}
              state={proxyCubeButtonType[staticBoTod.current] as ButtonState}
              text='Check'
            />
          </div>
          <div
            className={`${styles.backgroundLines} ${
              staticBoTod.current === CubeStatus.success ? styles.show : ''
            }`}
          />
        </div>
        <BoTod statuses={staticBoTod} />
      </div>

      <div
        className={`${styles.traffic} ${
          staticBoTod.current === CubeStatus.success ? styles.show : ''
        }`}
      >
        {staticBoTod.current === CubeStatus.success && (
          <Traffic peerID={peerID} />
        )}
      </div>
    </div>
  );
});
