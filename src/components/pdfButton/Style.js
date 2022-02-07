import { makeStyles } from '@material-ui/styles';
import colors from '../../theme/colors';

const useStyles = makeStyles({
    download_icon: {
        marginRight: '0.25rem',
    },
    pdf_button: {
        display: 'inline-block',
        padding: '0.25em 0.35em',
        background: '#fff',
        fontWeight: 'bold',
        fontSize: '1rem',
        color: colors.primary,
        border: `2px solid ${colors.primary}`,
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'all 0.2s cubic-bezier(0.33, 1, 0.68, 1)',
        '&:hover': {
            background: colors.primary,
            color: '#fff',
        },
        '&:focus': {
            outline: 'none',
            boxShadow: '0 0 0 0.5em rgba(28, 20, 99, 0.25)',
        },
    },
});
export default useStyles;
