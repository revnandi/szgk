import { makeStyles } from '@material-ui/styles';
import { theme } from '../../theme/SzGKTheme';

const useStyles = makeStyles({
    social_icons: {
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        flexWrap: 'wrap',
    },
    social_icons_header: {
        ...theme.typography.label1,
        flexBasis: '100%',
    },
    social_btn_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexBasis: '33.333%',
        marginBottom: '1rem',
        transition: 'opacity 0.2s ease',
        '&:hover': {
            opacity: '0.75',
        },
    },
    social_icons_button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    social_icons_label: {
        margin: '0 0.5rem',
        fontWeight: 'bold',
    },
    '@media (max-width: 769px)': {
        social_btn_container: {
            flexBasis: '33.333%',
        },
    },
    '@media (max-width: 470px)': {
        social_btn_container: {
            flexBasis: '50%',
        },
    },
});
export default useStyles;
