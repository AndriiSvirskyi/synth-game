import { useState } from 'react';
import Input from '../../components/Input/Input';
import styles from './Footer.module.scss';
import Button, { ButtonState } from '../../components/Button/Button';
import { api } from 'api/api';
import { ReactComponent as FooterLogo } from '../../assets/icons/iconInEmailBlock.svg';
import { ReactComponent as MSocialIcon } from '../../assets/icons/mSocialIcon.svg';
import { ReactComponent as TelegramIcon } from '../../assets/icons/telegramIcon.svg';
import { ReactComponent as GitHubIcon } from '../../assets/icons/gitHubIcon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitterIcon.svg';
import { ReactComponent as DiscordIcon } from '../../assets/icons/discordIcon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagramIcon.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/icons/youtubeIcon.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/icons/linkedinIcon.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebookIcon.svg';

export default function Footer(props: { isLight: boolean }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('primary');
  const mailValidator = /^[.\S]{3,}@[A-Za-z]{2,}\.[A-Za-z]{2,}/;

  const checkEmail = () => {
    api.post('subscriber', { email }).then((res) => {
      if (res.error) {
        setStatus('error');
        setError(res.error.email);
      } else {
        if (email.match(mailValidator)) {
          setStatus('loading');
          setTimeout(() => {
            setStatus('success');
            setEmail('');
          }, 1500);
        }
      }
    });
  };

  return (
    <div className={`${styles.wrapper} ${props.isLight ? styles.light : ''}`}>
      <div className={styles.emailBlock}>
        <FooterLogo className={styles.iconInEmailBlock} />
        <p>
          A fast, secure, and highly scalable blockchain platform for
          distributed apps, enterprise use cases, and the new internet economy.
        </p>
        <div className={styles.inputContainer}>
          <Input
            isLight={props.isLight}
            type={status}
            placeholder='Enter your email'
            errorMessage={error}
            inFooter={true}
            value={email}
            onChange={(e: any) => {
              if (status !== 'primary') {
                setStatus('primary');
                setError('');
              }
              setEmail(e.target.value);
            }}
          />
          <Button
            isLight={props.isLight}
            state={status as ButtonState}
            text='subsribe'
            inInput={true}
            inFooter={true}
            onClick={checkEmail}
          />
        </div>
      </div>
      <div className={styles.secondMenu}>
        <div>
          <div className={styles.navMenuWrapper}>
            <a className={styles.navItem} href={'/'}>
              Node Statistic
            </a>
            <a className={styles.navItem} href={'/your-node'}>
              Your Node
            </a>
            <a className={styles.navItem} href={'/calculator'}>
              Calculator
            </a>
            <a className={styles.navItem} href={'/what-we-doing'}>
              What we are doing
            </a>
          </div>
        </div>
        <div className={styles.usefulPages}>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Terms & Conditions</a>
          <a href='#'>Code of Conduct</a>
        </div>
        <div className={styles.joinUsBlock}>
          <p className={styles.joinUsTitle}>Join us</p>
          <div>
            <div className={styles.socialIconsContainer}>
              <MSocialIcon className={styles.socialIcon} />
              <TelegramIcon className={styles.socialIcon}/>
              <GitHubIcon className={styles.socialIcon}/>
              <TwitterIcon className={styles.socialIcon}/>
              <DiscordIcon className={styles.socialIcon}/>
            </div>
            <div className={styles.socialIconsContainer}>
              <InstagramIcon className={styles.socialIcon}/>
              <YoutubeIcon className={styles.socialIcon}/>
              <LinkedInIcon className={styles.socialLinkedin}/>
              <FacebookIcon className={styles.socialIcon}/>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.joinUsReserved}>All rights reserved </p>
    </div>
  );
}
