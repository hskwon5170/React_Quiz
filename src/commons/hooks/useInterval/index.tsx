import { useMemo, useRef } from "react";

export const useInterval = (callback: (...args: any) => void) => {
  const timer = useRef<any>();
  const timerStart = useMemo(() => {
    return () => {
      if (!timer.current) {
        timer.current = setInterval(callback, 1000);
      }
    };
  }, []);

  const timerPause = useMemo(() => {
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
    };
  }, []);

  return [timerStart, timerPause];
};
