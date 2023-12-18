import { useCallback, useRef } from "react";

function useThrottle<T extends (...args: any) => void>(
  callback: T,
  delay = 300
): T {
  const lastExecutedRef = useRef(0);

  const throttledCallback = useCallback(
    (...args: any) => {
      const now = Date.now();

      if (now - lastExecutedRef.current >= delay) {
        callback(...args);
        lastExecutedRef.current = now;
      }
    },
    [callback, delay]
  );

  return throttledCallback as T;
}

export default useThrottle;
