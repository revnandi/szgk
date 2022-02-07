import { makeStyles } from '@material-ui/styles';
import { theme } from '../../theme/SzGKTheme';

const useStyles = makeStyles({
    hidden: {
        display: 'none',
    },
    root: {
        maxWidth: '90vw',
        boxShadow: 'none',
        '& div': {
            boxShadow: 'none',
            background: 'none',
            padding: 0,
            minHeight: '0 !important',
        },
        // background: 'green',
    },
    heading: {
        // background: 'yellow',
        ...theme.typography.body4,
        width: '100%',
        color: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    content: {
        ...theme.typography.body4,
        marginTop: theme.spacing(4),
    },
    panel: {
        // background: 'blue',
    },
    summary: {
        background: 'purple',
    },
    details: {
        background: 'pink',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});
export default useStyles;
