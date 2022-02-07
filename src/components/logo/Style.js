import { makeStyles } from '@material-ui/styles';
import { theme } from '../../theme/SzGKTheme';

const useStyles = makeStyles({
    logo_label: {
        ...theme.typography.body1,
        width: 'fit-content',
        wordBreak: 'no-wrap',
        fontWeight: 'normal',
        fontSize: '1rem',
        whiteSpace: 'nowrap',
    },
    logo_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: '1rem',
        '& img': {
            maxWidth: '55px',
        },
    },
    // it's 1025px to avoid iPad render issue
    '@media (min-width: 1025px)': {
        logo_container: {
            display: 'flex',
            flexDirection: 'row',
            '& img': {
                maxWidth: '64px',
            },
        },
    },
    '@media (max-width: 415px)': {
        logo_container: {
            display: 'flex',
            flexDirection: 'row',
            '& img': {
                maxWidth: '40px',
            },
        },
        logo_label: {
            ...theme.typography.body1,
            width: 'fit-content',
            wordBreak: 'no-wrap',
            fontWeight: 'normal',
            fontSize: '0.64rem',
            whiteSpace: 'nowrap',
        },
    },
});
export default useStyles;
