import { makeStyles } from '@material-ui/styles';
import { theme } from '../../theme/SzGKTheme';
import colors from '../../theme/colors';

const useStyles = makeStyles({
    container: {
        position: 'fixed',
        bottom: '0',
        width: '100%',
        display: 'none',
        paddingBottom: '1rem',
        backgroundColor: colors.primary,
    },
    visible: {
        display: 'block',
    },
    header: {
        ...theme.typography.title2,
        color: colors.light,
    },
    text: {
        ...theme.typography.body3,
        color: colors.light,
    },
    linkText: {
        ...theme.typography.body3,
        color: colors.light,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
    },
    buttonContainer: {
        position: 'absolute',
        top: '1rem',
        right: '0.75rem',
    },
    closeIcon: {
        marginRight: '1rem',
        fontSize: '2.5rem',
        color: colors.light,
        transition: 'opacit 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
            opacity: '0.75',
        },
    },
    linkContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        marginRight: '1rem',
        fontSize: '1.5rem',
        color: colors.light,
    },
    link: {
        color: colors.light,
    },
    '@media (max-width: 769px)': {
        header: {
            fontSize: '1.25rem',
        },
        text: {
            fontSize: '1rem',
        },
        linkText: {
            margin: '0',
        },
    },
});
export default useStyles;
