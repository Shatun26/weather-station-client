import { useEffect, useRef, useState } from 'react';
import { DELAYS } from '../constants/delays';

const useDebounce = <T>(value: T, delay: number = DELAYS.SEARCH) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => setDebouncedValue(value), delay);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
