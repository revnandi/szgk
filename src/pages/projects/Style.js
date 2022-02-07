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
    highlight: {
        ...theme.typography.label1,
    },
    list: {},
    list_item: {
        ...theme.typography.body4,
    },
    PDF_buttons_container: {
        ...theme.flex.row,
        justifyContent: 'space-between',
        width: '100%',
    },
    '@media (min-width: 1368px)': {
        PDF_buttons_container: {
            width: '72%',
        },
    },
});
export default useStyles;
