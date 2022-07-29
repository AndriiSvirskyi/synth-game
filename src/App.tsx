import appStyles from './App.module.css';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import InfoPage from './pages/InfoPage/InfoPage';
import { useState } from 'react';
import { BoTod } from 'components/boTod';
import { BoTodStore } from 'store/BoTodStore';
import { CubeStatus } from 'components/boTod/cube.types';
import { observer } from 'mobx-react-lite';
import { SetupNode } from 'pages/SetupNode';

const App = observer(() => {
  const { fixedBoTod, changeStatuses, changeFixedStatus } = BoTodStore;
  const [isLight, setIsLight] = useState(false);
  console.log('fixedBoTod', fixedBoTod);
  return (
    <div className={`${appStyles.app} ${isLight ? appStyles.light : ''}`}>
      <Header setIsLight={setIsLight} isLight={isLight} />
      <InfoPage isLight={isLight} />
      <Footer isLight={isLight} />
      {(fixedBoTod.current === CubeStatus.appear ||
        fixedBoTod.current === CubeStatus.grab) && (
        <BoTod statuses={fixedBoTod} isFixed={true} />
      )}
      {fixedBoTod.current !== CubeStatus.appear &&
        fixedBoTod.current !== CubeStatus.grab && (
          <div
            className={appStyles.button}
            onClick={() => {
              const staticStatuses = {
                current: CubeStatus.disappear,
                past: CubeStatus.waiting,
              };
              const fixedStatuses = {
                current: CubeStatus.appear,
                past: CubeStatus.waiting,
              };
              changeStatuses(staticStatuses, fixedStatuses);
              setTimeout(() => {
                changeFixedStatus({
                  current: CubeStatus.grab,
                  past: CubeStatus.appear,
                });
              }, 1700);
            }}
          >
            Start Node
          </div>
        )}
      {fixedBoTod.current === CubeStatus.grab && <SetupNode />}
    </div>
  );
});

export default App;
