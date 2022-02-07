import { makeStyles } from '@material-ui/styles';
// eslint-disable-next-line import/no-named-as-default
import theme from '../../theme/SzGKTheme';

const useStyles = makeStyles({
    article_content: {
        display: 'inline-block',
    },
    '@media (min-width: 1024px)': {
        article_container: {
            '&:nth-child(even)': {
                flexDirection: 'row-reverse',
            },
        },

        article_area: {
            ...theme.typography.label1,
            position: 'relative',
            display: 'inline-flex',
            '&::after': {
                content: `''`,
                position: 'absolute',
                left: '5em',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '3.2em',
                display: 'inline-block',
                height: '3px',
                background: theme.colors.secondary,
            },
        },

        article_image_container: {
            display: 'flex',
            justifyContent: 'center',
        },

        article_image: {
            width: '80%',
        },

        utca: {
            width: '64px',
            height: 0,
            marginTop: 'auto',
            marginBottom: theme.spacing(2),
            marginLeft: theme.spacing(6),
            borderBottom: `2px solid ${theme.colors.secondary}`,
        },

        article_title: {
            ...theme.typography.title2,
            margin: '0',
        },

        article_content: {
            ...theme.typography.body4,
            marginTop: theme.spacing(4),
        },
    },
    '@media (max-width: 1024px)': {
        article_container: {
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(8),
        },

        article_area: {
            ...theme.typography.label1,
            position: 'relative',
            display: 'inline-flex',
            '&::after': {
                content: `''`,
                position: 'absolute',
                left: '5em',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '3.2em',
                display: 'inline-block',
                height: '3px',
                background: theme.colors.secondary,
            },
        },

        article_image_container: {
            display: 'flex',
            justifyContent: 'center',
        },

        article_image: {
            width: '80%',
            maxWidth: '25rem',
        },

        utca: {
            width: '64px',
            height: 0,
            marginTop: 'auto',
            marginBottom: theme.spacing(2),
            marginLeft: theme.spacing(2),
            borderBottom: `2px solid ${theme.colors.secondary}`,
        },

        article_title: {
            ...theme.typography.title2,
            margin: '0',
        },

        article_content: {
            ...theme.typography.body4,
            marginTop: theme.spacing(4),
        },
    },
    '@media (max-width: 375px)': {
        article_title: {
            ...theme.typography.title2,
            fontSize: '1.5rem',
            margin: '0',
        },
    },
});
export default useStyles;
