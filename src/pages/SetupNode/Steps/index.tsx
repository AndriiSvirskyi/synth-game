import { useMemo, useState } from 'react';
import { NetworkDescription } from './networkDescription';
import { SystemRequirements } from './systemRequirements';

type StepsMemo = {
  [key: number]: JSX.Element;
};

export const Steps = ({ index }: { index: number }) => {
  const networkDescription = useMemo(() => <NetworkDescription />, []);
  const systemRequirements = useMemo(() => <SystemRequirements />, []);
  const stepsMemo: StepsMemo = {
    0: networkDescription,
    1: systemRequirements,
  };
  return <div>{stepsMemo[index]}</div>;
};
