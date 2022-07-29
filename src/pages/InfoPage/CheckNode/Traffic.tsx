import { useEffect, useState } from 'react';
import { api } from '../../../api/api';
import styles from './Traffic.module.css';
import SpeedometerBG from '../../../assets/img/Speedometer_BG.svg';
import BandWidth from './BandWidth';

// max percentage - 65%
// max kilobyte - 1000 Kb
// 1% === 15.38 Kb
export default function Traffic(props: { peerID: string }) {
  const kbForOnePercent = 15.38; // Kb
  const kilobyteOutgoing = 91;
  const kilobyteIncoming = 357;
  const percentageOutgoing = kilobyteOutgoing / kbForOnePercent;
  const percentageIncoming = kilobyteIncoming / kbForOnePercent;

  const [ipfsVersion, setIpfsVersion] = useState('');

  useEffect(() => {
    api.get('ipfs/version').then((response) => {
      setIpfsVersion(response.data);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.firstBlock}>
        <div>
          <p className={`${styles.title} ${styles.uppercase}`}>
            Network traffic
          </p>
          <div className={styles.speedometersBlock}>
            {
              <div
                style={{
                  //@ts-ignore
                  '--final-percentage': `${percentageOutgoing}%`,
                  '--final-kilobyte': kilobyteOutgoing,
                  '--color': '#7D2EFF',
                }}
              >
                <div className={styles.speedometer_container}>
                  <img
                    className={styles.background}
                    src={SpeedometerBG}
                    alt='Speedometer'
                  />
                  <div className={styles.speedometer} />
                  <div className={styles.speedometer_type_container}>
                    <div className={styles.type}>Outgoing</div>
                    <div className={styles.kilobyte}>
                      <span className={styles.final_kb}></span>
                      <span className={styles.kb}>Kb/s</span>
                    </div>
                  </div>
                </div>
              </div>
            }
            {
              <div
                style={{
                  //@ts-ignore
                  '--final-percentage': `${percentageIncoming}%`,
                  '--final-kilobyte': kilobyteIncoming,
                  '--color': '#05F0FD ',
                }}
              >
                <div className={styles.speedometer_container}>
                  <img
                    className={styles.background}
                    src={SpeedometerBG}
                    alt='Speedometer'
                  />
                  <div className={styles.speedometer} />
                  <div className={styles.speedometer_type_container}>
                    <div className={styles.type}>Incoming</div>
                    <div className={styles.kilobyte}>
                      <span className={styles.final_kb}></span>
                      <span className={styles.kb}>Kb/s</span>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
        <div className={styles.titleWrap}>
          <p className={styles.title}>
            <div>Peer ID: </div>
            <div className={styles.peerId}>{props.peerID}</div>
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <p>Green</p> <span>Node health</span>
            </div>
            <div className={styles.box}>
              <p>{ipfsVersion}</p> <span>IPFS ver</span>
            </div>
            <div className={styles.box}>
              <p>0.0.0.1</p>
              <span>UI ver</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bandWidth}>
        <BandWidth />
      </div>
      <div className={styles.accuredRewardsBlock}>
        <p className={styles.title}>Accrued Rewards</p>
        <div className={styles.gridTable}>
          <div className={styles.gridTitle}>
            <p>Amount</p>
            <p>Date</p>
          </div>
          <div className={styles.gridCell}>
            <p>377 000 GXD</p>
            <p>05/02/2020 3. a.m</p>
          </div>
          <div className={styles.gridCell}>
            <p>377 000 GXD</p>
            <p>05/02/2020 3. a.m</p>
          </div>
          <div className={styles.gridCell}>
            <p>377 000 GXD</p>
            <p>05/02/2020 3. a.m</p>
          </div>
        </div>
      </div>
    </div>
  );
}
