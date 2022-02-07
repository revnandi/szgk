import { makeStyles } from '@material-ui/styles';
import { theme } from '../../theme/SzGKTheme';

const useStyles = makeStyles({
    grid_container_style: {
        width: '100%',
        margin: '0 auto',
        paddingTop: '7.5rem',
    },
    main_container: {
        ...theme.flex.column,
        alignItems: 'center',
    },
    article_container: {
        maxWidth: '86%',
    },
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
    introduction_container: {
        ...theme.flex.row,
        maxWidth: '86%',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    members_container: {
        marginTop: '5rem',
        width: '22rem',
        height: 'fit-content',
    },
    image_container: {
        marginBottom: '2rem',
    },
    image: {
        height: '200px',
        width: '200px',
    },
    name: {
        color: theme.colors.primary,
        fontWeight: 'bold',
    },
    introduction: {
        ...theme.typography.body4,
    },
    PDF_buttons_container: {
        ...theme.flex.row,
        justifyContent: 'space-between',
        width: '40%',
    },
    '@media (max-width: 414px)': {
        members_container: {
            width: '70vw',
            marginLeft: '10vw',
        },
        image_container: {
            display: 'flex',
            justifyContent: 'center',
        },
    },
    '@media (min-width: 414px) and (max-width: 768px)': {
        members_container: {
            width: '80vw',
            ...theme.flex.row,
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        image_container: {
            marginRight: '5vw',
        },
    },
    '@media (min-width: 667px) and (max-width: 684px)': {
        members_container: {
            width: '18rem',
        },
    },
    '@media (min-width: 1024px) and (max-width: 1025px)': {
        members_container: {
            width: '15rem',
        },
    },
});

export default useStyles;
