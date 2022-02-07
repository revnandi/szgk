import { makeStyles } from '@material-ui/styles';
import { theme } from '../../theme/SzGKTheme';

const useStyles = makeStyles({
    '@media (max-width: 769px)': {
        error_container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
        },
        error_image: {
            maxWidth: '50vw',
            maxHeight: '50vh',
        },
    },
    '@media (min-width: 769px)': {
        error_container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            marginTop: theme.spacing(8),
            paddingBottom: theme.spacing(4),
        },
        error_image: {
            maxWidth: '424px',
            maxHeight: '424px',
        },
    },
});
export default useStyles;
