import { useEffect, useRef, useState } from "react";

export interface CountdownOptions {
  /** 倒计时的目标时间 */
  targetDate?: Date | number | string;
  /** 倒计时总时长（毫秒） */
  interval?: number;
  /** 倒计时结束时的回调函数 */
  onEnd?: () => void;
}

export interface CountdownResult {
  /** 剩余时间（毫秒） */
  timeLeft: number;
  /** 格式化的时间对象 */
  formattedRes: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
  };
}

const calcLeft = (target?: Date | number | string): number => {
  if (!target) {
    return 0;
  }

  const left = new Date(target).getTime() - Date.now();
  return left < 0 ? 0 : left;
};

const parseMs = (milliseconds: number) => {
  return {
    days: Math.floor(milliseconds / (24 * 60 * 60 * 1000)),
    hours: Math.floor(milliseconds / (60 * 60 * 1000)),
    minutes: Math.floor(milliseconds / (60 * 1000)),
    seconds: Math.floor(milliseconds / 1000),
    milliseconds: Math.floor(milliseconds),
  };
};

const useCountdown = (options: CountdownOptions = {}): CountdownResult => {
  const { targetDate, interval = 1000, onEnd } = options;

  const [timeLeft, setTimeLeft] = useState(() => calcLeft(targetDate));
  const onEndRef = useRef(onEnd);
  onEndRef.current = onEnd;

  useEffect(() => {
    setTimeLeft(calcLeft(targetDate));
  }, [targetDate]);

  useEffect(() => {
    if (!targetDate) {
      setTimeLeft(0);
      return;
    }

    // 立即执行一次
    setTimeLeft(calcLeft(targetDate));

    const timer = setInterval(() => {
      const targetLeft = calcLeft(targetDate);
      setTimeLeft(targetLeft);

      if (targetLeft === 0) {
        onEndRef.current?.();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [targetDate, interval]);

  const formattedRes = parseMs(timeLeft);

  return {
    timeLeft,
    formattedRes,
  };
};

export default useCountdown;
