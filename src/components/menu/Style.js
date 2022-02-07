import { makeStyles } from '@material-ui/styles';
// eslint-disable-next-line import/no-named-as-default
import theme from '../../theme/SzGKTheme';
import colors from '../../theme/colors';

const useStyles = makeStyles({
    menu_container: {
        zIndex: '1',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.95)',
        boxShadow: '2px 0 15px 0 rgba(0,0,0,0.035)',
        transition: 'transform 0.5s ease-out',
        '&.hidden': {
            transform: 'translateY(-8rem)',
            boxShadow: 'none',
        },
    },
    logotype: {
        fontSize: '1rem',
        color: colors.primary,
        whiteSpace: 'nowrap',
        '& a': {
            textDecoration: 'none',
            transition: 'opacity 0.2 ease',
            '&:hover': {
                opacity: '0.75',
            },
            '&:visited': {
                color: colors.primary,
            },
        },
    },
    desktop_menu: {
        display: 'none',
    },
    mobile_menu: {
        ...theme.typography.header4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
    },
    mobile_drawer: {
        background: colors.primaryLight,
        minWidth: '25vw',
        height: '100%',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: '1rem 1rem 1rem 2rem',
        '& svg': {
            cursor: 'pointer',
            transition: 'opacity 0.2s ease',
            '&:hover': {
                opacity: '0.75',
            },
        },
    },
    mobile_menuItems: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: '2rem 0 0 0',
    },
    mobile_menuItem: {
        cursor: 'pointer',
        ...theme.typography.title2,
        color: 'white',
        listStyleType: 'none',
        '& a': {
            position: 'relative',
            fontSize: '1.5625rem',
        },
        '& a::after': {
            content: `''`,
            position: 'absolute',
            left: '0',
            top: '1.5em',
            display: 'inline-block',
            width: '0%',
            height: '3px',
            background: colors.secondary,
            transition: 'width 0.3s ease',
        },
        '& a.active::after': {
            width: '100%',
        },
    },
    mobile_logo_container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacing(8),
    },
    mobile_logo: {},
    mobile_button_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '2.5rem',
        height: '2.5rem',
        cursor: 'pointer',
        transition: 'opacity 0.2s ease',
        '&:hover': {
            opacity: '0.75',
        },
        '& svg': {
            width: '1.5em',
            height: '1.5em',
        },
    },
    mobile_drawerButton: {
        fontSize: '2.5rem',
    },
    language_button_container: {
        listStyle: 'none',
        marginTop: '0.5rem',
    },
    // it's 1025px to avoid iPad render issue
    '@media (min-width: 1025px)': {
        mobile_menu: {
            display: 'none',
        },
        logotype: {
            fontSize: '1rem',
        },
        desktop_menu: {
            display: 'block',
        },
        desktop_menuItems: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            margin: '0',
        },
        desktop_menuItem: {
            ...theme.typography.body1,
            cursor: 'pointer',
            marginLeft: theme.spacing(8),
            listStyleType: 'none',
            whiteSpace: 'nowrap',
            '& a': {
                position: 'relative',
                fontSize: '1rem',
            },
            '& a::after': {
                content: `''`,
                position: 'absolute',
                left: '0',
                top: '1.5em',
                display: 'inline-block',
                width: '0%',
                height: '3px',
                background: colors.secondary,
                transition: 'width 0.3s ease',
            },
            '& a.active::after': {
                width: '100%',
            },
            '&:hover': {
                opacity: '0.75',
            },
        },
        language_button_container: {
            marginTop: '0',
        },
        language_button: {
            fontSize: '0.8rem',
        },
    },
    paca_jf: {
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: -1,
    },
});
export default useStyles;
