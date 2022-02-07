import { makeStyles } from '@material-ui/styles';
import { theme } from './theme/SzGKTheme';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        background: theme.primary.backgroundcolor,
        height: '100%',
        transformOrigin: '0.0',
    },
});
export default useStyles;
