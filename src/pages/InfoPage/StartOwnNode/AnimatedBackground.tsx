import styles from "./AnimatedBackground.module.css";

import { ReactComponent as Shield } from "../../../assets/illustration/shield.svg";
import { ReactComponent as ShieldLock } from "../../../assets/illustration/shieldLock.svg";
import { ReactComponent as ShieldContainerBack } from "../../../assets/illustration/shieldContainerBack.svg";
import { ReactComponent as ShieldContainerFront } from "../../../assets/illustration/shieldContainerFront.svg";

import { ReactComponent as Cloud } from "../../../assets/illustration/cloud.svg";

import { ReactComponent as FolderSheet } from "../../../assets/illustration/folderSheet.svg";
import { ReactComponent as FolderBack } from "../../../assets/illustration/folderBack.svg";
import { ReactComponent as FolderFront } from "../../../assets/illustration/folderFront.svg";

import { ReactComponent as LockBody } from "../../../assets/illustration/lockBody.svg";
import { ReactComponent as LockHook } from "../../../assets/illustration/lockHook.svg";
import { ReactComponent as LockPassword } from "../../../assets/illustration/lockPassword.svg";

import { ReactComponent as FolderGreenBig } from "../../../assets/illustration/folderGreenBig.svg";
import { ReactComponent as FolderGreenSmall } from "../../../assets/illustration/folderGreenSmall.svg";

export default function AnimatedBackground() {
  return (
    <div className={styles.background}>
      <div className={styles.illustration}>
        <div className={styles.lockContainer}>
          <LockBody className={styles.lockBody} />
          <LockHook className={styles.lockHook} />
          <LockPassword className={styles.lockPassword} />
        </div>

        <div className={`${styles.folderContainer} ${styles.small}`}>
          <FolderBack
            width="69"
            height="89"
            className={`${styles.folderBack} ${styles.folderBackSmall}`}
          />
          <div className={`${styles.folderSheet} ${styles.folderSheetSmall}`}>
            <FolderSheet width="69" height="89" className={styles.sheet} />
            <div className={styles.textSmall}>
              <span>Lor</span> <span>em</span> <span>ip</span> <span>sum</span>{" "}
            </div>
            <div className={styles.textSmallSecond}>
              {" "}
              <span>do</span> <span>lor</span>
            </div>
          </div>
          <FolderFront
            width="69"
            height="89"
            className={`${styles.folderFront} ${styles.folderFrontSmall}`}
          />
        </div>

        <div className={styles.cloudContainer}>
          <Cloud className={styles.cloud} />
        </div>

        <div className={`${styles.folderContainer} ${styles.big}`}>
          <FolderBack
            width="89"
            height="116"
            className={`${styles.folderBack} ${styles.folderBackBig}`}
          />
          <div className={`${styles.folderSheet} ${styles.folderSheetBig}`}>
            <FolderSheet width="89" height="116" className={styles.sheet} />
          </div>
          <FolderFront
            width="89"
            height="116"
            className={`${styles.folderFront} ${styles.folderFrontBig}`}
          />
        </div>

        <div className={styles.shieldContainer}>
          <ShieldContainerBack className={styles.shieldContainerBack} />
          <div className={styles.shieldAndLock}>
            <Shield className={styles.shield} />
            <ShieldLock className={styles.lock} />
          </div>
          <ShieldContainerFront className={styles.shieldContainerFront} />
        </div>

        <div className={styles.folderGreenBig}>
          <FolderGreenBig />
        </div>

        <div className={styles.folderGreenSmall}>
          <FolderGreenSmall />
        </div>

      </div>
    </div>
  );
}
