import { useCallback, useEffect, useRef } from 'react';
import * as Type from '../../@types';

const useTimeout: Type.UseTimeoutFn = (callback, delay) => {
    const callbackRef: any = useRef(callback);
    const timeoutRef: any = useRef(null);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => {
            callbackRef.current();
        }, delay);
    }, [delay]);

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
        callbackRef.current();
    }, []);

    useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);

    return { clear };
};

export default useTimeout;
