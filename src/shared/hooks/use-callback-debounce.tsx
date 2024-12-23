import { useEffect, useRef, useCallback } from 'react';
import { DELAYS } from '../constants/delays';

function useCallbackDebounce<T extends (...args: unknown[]) => void>(
  callback: T,
  delay = DELAYS.SEARCH
): (...args: Parameters<T>) => void {
  const callbackRef = useRef(callback);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const clearTimer = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    if (delay !== null) {
      clearTimer();
      timerRef.current = setTimeout(() => {
        if (callbackRef.current) {
          callbackRef.current();
        }
      }, delay);
    }

    return clearTimer;
  }, [delay]);

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [delay]
  );

  return debouncedCallback;
}

export default useCallbackDebounce;
