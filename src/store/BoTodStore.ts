import { CubeStatus } from 'components/boTod/cube.types';
import { makeAutoObservable } from 'mobx';

type BoTodProps = {
  past: CubeStatus;
  current: CubeStatus;
};

class BoTod {
  staticBoTod: BoTodProps = {
    past: CubeStatus.waiting,
    current: CubeStatus.waiting,
  };
  fixedBoTod: BoTodProps = {
    past: CubeStatus.waiting,
    current: CubeStatus.waiting,
  };

  constructor() {
    makeAutoObservable(this);
  }

  changeStaticStatus = ({ current, past }: BoTodProps) => {
    this.staticBoTod = { current, past };
  };
  changeFixedStatus = ({ current, past }: BoTodProps) => {
    this.fixedBoTod = { current, past };
  };
  changeStatuses = (staticStatuses: BoTodProps, fixedStatuses: BoTodProps) => {
    this.staticBoTod = staticStatuses;
    this.fixedBoTod = fixedStatuses;
  };
}

export const BoTodStore = new BoTod();
