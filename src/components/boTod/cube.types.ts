export enum MediumCubeName {
  T = 'T',
  R = 'R',
  B = 'B',
  L = 'L',
}

export enum SmallCubeName {
  LT = 'LT',
  RT = 'RT',
  LB = 'LB',
  RB = 'RB',
}

export enum CubeStatus {
  loading = 'loading',
  error = 'error',
  waiting = 'waiting',
  success = 'success',
  disappear = 'disappear',
  appear = 'appear',
  grab = 'grab',
}

export enum CubeMode {
  afterError = 'afterError',
  afterLoading = 'afterLoading',
  afterSuccess = 'afterSuccess',
  afterWaiting = 'afterWaiting',
}
