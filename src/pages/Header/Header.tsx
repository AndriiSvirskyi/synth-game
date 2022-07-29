import { useState } from 'react';
import styles from './header.module.scss';
import { ReactComponent as Logo } from '../../assets/icons/headerLogo.svg';
import { ThemeToggle } from 'components/themeToggle';

const handleScrollToEl = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Header(props: { setIsLight: any; isLight: boolean }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);

  const handleScrollMobile = (path: string) => {
    setIsMenuVisible(false);
    setHideMenu(false);
    setTimeout(() => {
      handleScrollToEl(path);
    }, 0);
  };

  return (
    <div id='header' className={styles.headerWrapper}>
      <Logo
        className={`${styles.logo} ${hideMenu ? styles.fixed : ''} ${
          props.isLight ? styles.light : ''
        }`}
      />
      <div className={styles.navMenuWrapper}>
        <div
          className={styles.navItem}
          onClick={() => {
            handleScrollToEl('node-statistic');
          }}
        >
          Node Statistic
        </div>
        <div
          className={styles.navItem}
          onClick={() => {
            handleScrollToEl('your-node');
          }}
        >
          Your Node
        </div>
        <div
          className={styles.navItem}
          onClick={() => {
            handleScrollToEl('calculator');
          }}
        >
          Calculator
        </div>
        <div
          className={styles.navItem}
          onClick={() => {
            handleScrollToEl('about-us');
          }}
        >
          What we are doing
        </div>
        <ThemeToggle setIsLight={props.setIsLight} isLight={props.isLight} />
      </div>

      {/* MOBILE MENU */}

      <button
        onClick={() => {
          setHideMenu(!hideMenu);
          if (isMenuVisible) {
            setTimeout(() => {
              setIsMenuVisible(false);
            }, 600);
          } else {
            setIsMenuVisible(true);
          }
        }}
        className={`${styles.menuButton} ${hideMenu ? styles.fixed : ''}`}
      >
        <div
          className={`${styles.mobileMenu} ${
            hideMenu ? styles.open : styles.close
          } ${props.isLight ? styles.light : ''}`}
        ></div>
      </button>

      {isMenuVisible && (
        <div
          onScroll={() => {
            console.log('on scroll');
          }}
          className={`${styles.mobileHeader}  ${
            !hideMenu ? styles.hide : styles.show
          } ${props.isLight ? styles.light : ''}`}
        >
          <div
            className={styles.mobileMenuItem}
            onClick={() => {
              handleScrollMobile('node-statistic');
            }}
          >
            Home
          </div>
          <div
            className={styles.mobileMenuItem}
            onClick={() => {
              handleScrollMobile('node-statistic');
            }}
          >
            Node statistic
          </div>
          <div
            className={styles.mobileMenuItem}
            onClick={() => {
              handleScrollMobile('your-node');
            }}
          >
            Your Node
          </div>
          <div
            className={styles.mobileMenuItem}
            onClick={() => {
              handleScrollMobile('calculator');
            }}
          >
            Calculator
          </div>
          <div
            className={styles.mobileMenuItem}
            onClick={() => {
              handleScrollMobile('about-us');
            }}
          >
            What we doing
          </div>
          <ThemeToggle setIsLight={props.setIsLight} isLight={props.isLight} />
        </div>
      )}
    </div>
  );
}
