import { makeStyles } from '@material-ui/styles';
import colors from '../../theme/colors';

const useStyles = makeStyles({
    image: {
        maxHeight: '200px',
        maxWidth: '200px',
    },
    spinner: {
        position: 'relative',
        'z-index': '666',
    },
    '@media (min-width: 1024px) ': {
        spinner: {
            position: 'relative',
            'z-index': '666',
            top: '-40%',
            left: '-40%',
        },
    },
    placeholder: {
        position: 'relative',
        'z-index': '666',
        backgroundColor: colors.primary,
        width: '200px',
        height: '200px',
    },
});
export default useStyles;
