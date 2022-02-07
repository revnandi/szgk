import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const getDeviceConfig = (width) => {
    if (width < 320) {
        return 'xs';
    }
    if (width >= 320 && width < 720) {
        return 'sm';
    }
    if (width >= 720 && width < 1024) {
        return 'md';
    }
    if (width >= 1024 && width < 1200) {
        return 'lg';
    }
    if (width >= 1200) {
        return 'xl';
    }
    return null;
};

const useBreakpoint = () => {
    const [brkPnt, setBrkPnt] = useState(() =>
        getDeviceConfig(window.innerWidth)
    );
    useEffect(() => {
        const calcInnerWidth = throttle(() => {
            setBrkPnt(getDeviceConfig(window.innerWidth));
        }, 200);
        window.addEventListener('resize', calcInnerWidth);
        return () => window.removeEventListener('resize', calcInnerWidth);
    }, []);

    return brkPnt;
};

export default useBreakpoint;
