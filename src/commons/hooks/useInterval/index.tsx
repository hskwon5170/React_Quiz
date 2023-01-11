import { useMemo, useRef } from "react";

export const useInterval = (callback: (...args: any) => void) => {
  const timer = useRef<any>(); // 최근에 들어온 callback을 저장할 ref를 만든다
  
  const timerStart = useMemo(() => {
    return () => {
      if (!timer.current) {
        timer.current = setInterval(callback, 1000); // callback이 바뀔때마다 ref를 업데이터해준다
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
