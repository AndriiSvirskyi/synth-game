import styles from './NodeStatistic.module.scss';
import Map from './Map/Map';
import { useEffect, useState } from 'react';
import { api } from 'api/api';

export default function NodeStatistic(props: { isLight: boolean }) {
  const [peers, setPeers] = useState([]);
  const [hostingData, setHostingData] = useState({ size: 0, unit: '' });
  const getInfo = (kb: number) => {
    const mb = kb / 1000;
    const gb = mb / 1000;
    const tb = gb / 1000;
    if (tb > 0.01) {
      return { size: +tb.toFixed(2), unit: 'TB' };
    }
    if (gb > 0.01) {
      return { size: +gb.toFixed(2), unit: 'GB' };
    }
    if (mb > 0.01) {
      return { size: +mb.toFixed(2), unit: 'MB' };
    }
    return { size: kb, unit: 'KB' };
  };
  useEffect(() => {
    api.get('ipfs/peers').then((response) => {
      setPeers(response.data);
    });
    api.get('ipfs/hosting').then((response) => {
      setHostingData(getInfo(response.data.RepoSize));
    });
  }, []);

  return (
    <div className={`${styles.wrapper} ${props.isLight ? styles.light : ''}`}>
      <div>
        <h3 id='node-statistic' className={styles.title}>
          Node <span>Statistic</span>
        </h3>
      </div>
      <div className={styles.dataBlock}>
        <div className={styles.firstDataBlock}>
          <div className={styles.topLine}></div>
          <div className={styles.bottomLine}></div>
          <p>
            <span>{peers.length}</span> <span>peers</span>
          </p>
        </div>
        <div className={styles.secondDataBlock}>
          <span>Hosting</span>
          <span>Network health</span>
          <p>{`${hostingData.size} ${hostingData.unit}`}</p>
          <p>Good</p>
        </div>
      </div>
      <Map isLight={props.isLight} />
      <div className={styles.peers}>
        <div className={styles.whitePeers}>
          <span></span> 1 <span className={styles.fontRoboto}>-</span>10 peers
        </div>
        <div className={styles.bluePeers}>
          <span></span> 10<span className={styles.fontRoboto}>-</span>100 peers
        </div>
      </div>
    </div>
  );
}
