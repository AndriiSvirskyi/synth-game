import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Bar from './Bar';
import style from './style.module.scss';
import { useRefEventListener } from '../../utils';

const MIN_VALUE = 0;
const MAX_VALUE = 1;

type SliderProps = {
  initialValue: number;
  initialProgress: number;
  barsCount: number;
  title: string;
  titleSize: number;
  maxValue: number;
  onChange: (value: number, percentValue: number) => any;
  isLight: boolean;
};

type IBoundingRect = {
  width: number;
  left: number;
};

export default function Slider({
  initialValue,
  initialProgress,
  barsCount,
  title,
  titleSize,
  onChange,
  maxValue,
  isLight,
}: SliderProps) {
  const progressRef = useRef<HTMLInputElement>(null);
  const isMousePress = useRef<boolean>(false);

  const [progress, setProgress] = useState(
    initialValue ? initialValue / maxValue : initialProgress
  );
  const [boundingRect, setBoundingRect] = useState<IBoundingRect>({
    width: 0,
    left: 0,
  });

  useEffect(() => {
    if (progressRef.current) {
      setBoundingRect(progressRef.current.getBoundingClientRect());
    }
  }, [progressRef]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', touchMove);
    window.addEventListener('touchend', touchEnd);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', touchMove);
      window.removeEventListener('touchend', touchEnd);
    };
  }, []);

  const handleResize = () => {
    const dimensions = progressRef?.current?.getBoundingClientRect() || {
      width: 0,
      left: 0,
    };
    setBoundingRect({ width: dimensions?.width, left: dimensions?.left });
  };

  const updateProgress = (clientX: number) => {
    const value = parseFloat(
      ((clientX - boundingRect.left) / boundingRect.width).toFixed(2)
    );
    const validateValue =
      value < MIN_VALUE ? MIN_VALUE : value > MAX_VALUE ? MAX_VALUE : value;
    if (validateValue !== progress) {
      onChange(Math.round(validateValue * maxValue), validateValue);
      setProgress(validateValue);
    }
  };

  const updateProgressRef = useRefEventListener(updateProgress);

  const onMouseDown = (event: any) => {
    const { clientX } = event;
    updateProgressRef.current(clientX);
    isMousePress.current = true;
  };

  const onMouseUp = () => {
    isMousePress.current = false;
  };

  const onMouseMove = (event: any) => {
    if (isMousePress.current) {
      const { clientX } = event;
      updateProgressRef.current(clientX);
    }
  };

  const onTouchStart = (event: any) => {
    const { clientX } = event.changedTouches[0];
    updateProgressRef.current(clientX);
    isMousePress.current = true;
  };

  const touchEnd = () => {
    isMousePress.current = false;
  };

  const touchMove = (event: any) => {
    if (isMousePress.current) {
      const { clientX } = event.changedTouches[0];
      updateProgressRef.current(clientX);
    }
  };

  return (
    <div className={`${style.container} ${isLight ? style.light : ''}`}>
      <div className={style.header}>
        <p className={style.title}>{title}</p>
        <p className={style.size}>{titleSize}</p>
      </div>
      <div
        className={style.progress}
        ref={progressRef}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {Array.from({ length: barsCount }, (v, k) => k).map((key) => (
          <Bar
            index={key}
            key={`bar-${key}`}
            containerWidth={boundingRect.width}
            barsCount={barsCount}
            progress={progress}
            isLight={isLight}
          />
        ))}
      </div>
    </div>
  );
}

Slider.propTypes = {
  initialPercentage: PropTypes.number,
  initialValue: PropTypes.number,
  barsCount: PropTypes.number,
  maxValue: PropTypes.number,
  title: PropTypes.string,
  titleSize: PropTypes.string,
  onChange: PropTypes.func,
};

Slider.defaultProps = {
  initialProgress: 0.1,
  barsCount: 10,
  maxValue: 10,
  title: '',
  titleSize: '',
  onChange: () => {},
};
