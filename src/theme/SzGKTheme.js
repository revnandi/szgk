import typography from './typography';
import colors from './colors';
import flex from './flex';

export const theme = {
    colors,
    typography,
    flex,
    spacing: (factor) => `${0.25 * factor}rem`,
    primary: {
        backgroundcolor: 'white',
    },
    breakpoints: {
        xs: 320,
        sm: 720,
        md: 1024,
        lg: 1200,
        xl: 1400,
        xxl: 1600,
    },
};

export default theme;
