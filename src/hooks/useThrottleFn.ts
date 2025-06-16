import { useCallback, useEffect, useRef } from "react";

export interface ThrottleOptions {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
}

type Fn = (...args: any[]) => any;

function useThrottleFn<T extends Fn>(fn: T, options?: ThrottleOptions) {
  const { wait = 1000, leading = true, trailing = true } = options || {};

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastExecRef = useRef<number>(0);
  const argsRef = useRef<any[]>([]);

  // 清理函数
  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // 确保组件卸载时清理
  useEffect(() => {
    return cancel;
  }, [cancel]);

  const run = useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      argsRef.current = args;

      // 如果是第一次调用且允许立即执行
      if (lastExecRef.current === 0 && !leading) {
        lastExecRef.current = now;
        return;
      }

      const remaining = wait - (now - lastExecRef.current);

      // 可以立即执行
      if (remaining <= 0) {
        if (timeoutRef.current) {
          cancel();
        }
        lastExecRef.current = now;
        fn.apply(null, args);
        return;
      }

      // 设置延迟执行
      if (trailing && !timeoutRef.current) {
        timeoutRef.current = setTimeout(() => {
          lastExecRef.current = leading ? Date.now() : 0;
          timeoutRef.current = null;
          fn.apply(null, argsRef.current);
        }, remaining);
      }
    },
    [fn, wait, leading, trailing, cancel]
  );

  return {
    run,
    cancel,
  };
}

export default useThrottleFn;
