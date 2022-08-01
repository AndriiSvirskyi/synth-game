import { makeAutoObservable } from 'mobx';

class BoTod {
  constructor() {
    makeAutoObservable(this);
  }
}

export const BoTodStore = new BoTod();
