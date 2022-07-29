// import { ReactComponent as RewarddMarker } from './assets/revard.svg'
import style from './style.module.css';

export default function Label({ children, isLight }) {
  return (
    <div className={`${style.container} ${isLight ? style.light : ''}`}>
      <span className={`${style.text} ${isLight ? style.light : ''}`}>
        {children}
      </span>
    </div>
  );
}
