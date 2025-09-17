import { useCallback, useRef } from "react";

export interface DebounceOptions {
  delay?: number;
  immediate?: boolean; // 是否立即执行第一次调用
}

type Fn = (...args: any[]) => any;

/**
 * 防抖Hook
 * @param fn 要防抖的函数
 * @param options 防抖选项
 * @returns 返回防抖后的函数和取消函数
 */
function useDebounce<T extends Fn>(fn: T, options?: DebounceOptions) {
  const { delay = 300, immediate = false } = options || {};
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const immediateRef = useRef<boolean>(true);

  // 取消防抖
  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    immediateRef.current = true;
  }, []);

  // 防抖函数
  const debouncedFn = useCallback(
    (...args: Parameters<T>) => {
      const callNow = immediate && immediateRef.current;
      
      // 清除之前的定时器
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // 如果需要立即执行且是第一次调用
      if (callNow) {
        immediateRef.current = false;
        fn.apply(null, args);
      }

      // 设置新的定时器
      timeoutRef.current = setTimeout(() => {
        immediateRef.current = true;
        timeoutRef.current = null;
        
        // 如果不是立即执行模式，在延迟后执行
        if (!immediate) {
          fn.apply(null, args);
        }
      }, delay);
    },
    [fn, delay, immediate, cancel]
  );

  return {
    run: debouncedFn,
    cancel,
  };
}

export default useDebounce;
