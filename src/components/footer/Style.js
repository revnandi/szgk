import { makeStyles } from '@material-ui/styles';
import { theme } from '../../theme/SzGKTheme';

const useStyles = makeStyles({
    footer_stretched: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(32),
        paddingBottom: theme.spacing(12),
        textAlign: 'center',
        overflow: 'hidden',
        minHeight: '80vh',
    },
    '@media (min-width: 667px) and (max-width: 737px)': {
        footer: {
            minHeight: '130vh',
        },
    },
    '@media (min-width: 769px)': {
        footer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: theme.spacing(32),
            paddingBottom: theme.spacing(56),
            textAlign: 'center',
            overflow: 'hidden',
        },
        footer_stretched: {
            marginTop: theme.spacing(48),
        },
        footer_inner: {},
        footer_title: {
            ...theme.typography.title1,
        },

        footer_contact: {
            ...theme.typography.body2,
            marginTop: '2em',
        },
        footer_body: {
            ...theme.typography.body5,
            marginTop: '3em',
            textAlign: 'left',
        },
        footer_image: {
            marginTop: theme.spacing(8),
        },
    },
    '@media (max-width: 769px)': {
        footer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: theme.spacing(32),
            paddingBottom: theme.spacing(12),
            textAlign: 'center',
            overflow: 'hidden',
            height: '83vh',
        },

        footer_title: {
            ...theme.typography.title3,
            width: '92%',
        },

        footer_contact: {
            ...theme.typography.body1,
            color: '#21B573',
            width: '92%',
            marginTop: '1em',
        },
        footer_body: {
            ...theme.typography.body5,
            marginTop: '3em',
            textAlign: 'left',
        },
        footer_image: {
            marginTop: theme.spacing(8),
            width: '92%',
        },
    },
    paca_ba: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex: -1,
    },
});
export default useStyles;
