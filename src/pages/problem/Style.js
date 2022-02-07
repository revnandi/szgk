import { makeStyles } from '@material-ui/styles';
import { theme } from '../../theme/SzGKTheme';

const useStyles = makeStyles({
    main_title: {
        ...theme.typography.title1,
        display: 'inline',
        marginBottom: '0',
        background:
            'linear-gradient(rgba(255, 255, 255, 0) 60%, rgb(235, 248, 243) 55%)',
    },
    sub_title: {
        ...theme.typography.title4,
        marginTop: '0',
    },
    paragraph: {
        ...theme.typography.body4,
    },
    ripple_container: {
        ...theme.flex.row,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
    },
    container_grid_style: {
        width: '100%',
        margin: '0',
        paddingTop: '7.5rem',
    },
    content: {
        '& h2': {
            ...theme.typography.title4,
            marginTop: '3rem',
            '&:first-child': {
                marginTop: '0',
            },
        },
        '& p': {
            ...theme.typography.body4,
        },
    },
});
export default useStyles;
