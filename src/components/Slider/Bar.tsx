import React, { useRef } from "react";
import classNames from 'classnames/bind';

import style from './style.module.scss'

const BAR_WIDTH = 2

type BarProps = { 
  containerWidth: number,
  index: number,
  barsCount: number,
  progress: number,
  isLight: boolean,
};

export default function Bar({ containerWidth, index, barsCount, progress, isLight }: BarProps) {
  const barRef = useRef(null);
  const delta = (containerWidth - BAR_WIDTH)/(barsCount - 1)
  const deltaPercent = (((containerWidth - BAR_WIDTH)/barsCount)/(containerWidth - BAR_WIDTH))
  const deltaPercentCurrent = deltaPercent*(index+1)
  const isCurrentBar = (deltaPercent*index < progress && progress <= deltaPercent*(index+1)) || (progress === 1 && index === barsCount - 1) 
  const left = index * delta

  return (
    <div
      className={
        classNames(
          style.bar,
          deltaPercentCurrent <= progress && style.activeBart,
          isCurrentBar && style.currentBar,
          isLight && style.light
        )
      }
      style={{left: isCurrentBar ? left - 3 : left }}
      ref={barRef}
    />
  );
}
