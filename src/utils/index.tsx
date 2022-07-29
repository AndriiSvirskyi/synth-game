import { useRef } from 'react'

const useRefEventListener = (fn: (arg: any) => any) => {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  return fnRef;
};

export { useRefEventListener }