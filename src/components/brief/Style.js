import { makeStyles } from '@material-ui/styles';
// eslint-disable-next-line import/no-named-as-default
import theme from '../../theme/SzGKTheme';
import colors from '../../theme/colors';

const useStyles = makeStyles({
    brief_illustration: {
        width: '100%',
        '& img': {
            display: 'block',
            width: '100%',
        },
    },
    hero_image: {
        margin: '0',
    },
    '@media (max-width: 769px)': {
        brief_header: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        brief_header_title: {
            marginTop: theme.spacing(8),
            ...theme.typography.title2,
            marginBottom: '0',
            '& mark': {
                color: colors.primary,
                background:
                    'linear-gradient(rgba(255, 255, 255, 0) 60%, rgb(235, 248, 243) 55%)',
            },
        },
        brief: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        brief_image: {
            display: 'none',
        },
    },

    brief_header_content: {
        ...theme.typography.header1,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(8),
    },

    brief_footer: {
        // background: 'blue'
    },

    brief_footer_item_basic: {
        ...theme.typography.body4,
        textAlign: 'left',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        // background: 'purple'
    },
    brief_footer_item_highlighted: {
        ...theme.typography.body3,
        // background: 'lightBlue'
    },
    '@media (min-width: 1024px)': {
        brief: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // background: 'pink'
        },

        brief_image: {
            position: 'absolute',
            top: '0',
            left: '24%',
            zIndex: -1,
            height: '90%',
            width: '90%',
        },

        brief_header: {
            paddingBottom: theme.spacing(24),
            marginTop: theme.spacing(24),
            position: 'relative',
        },

        brief_header_title: {
            ...theme.typography.title1,
            // background: 'orange'
        },

        brief_header_content: {
            ...theme.typography.header1,
            marginTop: theme.spacing(2),
            // background: 'red'
        },

        brief_footer: {
            paddingTop: theme.spacing(16),
            // background: 'blue'
        },

        brief_footer_item_basic: {
            ...theme.typography.body4,
            textAlign: 'left',
            // background: 'purple'
        },

        brief_footer_item_highlighted: {
            ...theme.typography.body3,
            marginBottom: theme.spacing(8),
            marginTop: theme.spacing(8),
            // background: 'lightBlue'
        },
    },
    '@media (min-width: 769px)': {
        brief: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // background: 'pink'
        },

        brief_image: {
            position: 'absolute',
            top: '0',
            left: '24%',
            zIndex: -1,
            height: '90%',
            width: '90%',
        },

        brief_header: {
            width: '64%',
            marginTop: theme.spacing(24),
            paddingBottom: theme.spacing(24),
            position: 'relative',
            // background: 'yellow'
        },
        brief_header_headline: {
            paddingBottom: '0',
        },
        brief_header_title: {
            ...theme.typography.title1,
            // background: 'orange'
            marginBottom: '0',
            '& mark': {
                color: colors.primary,
                background:
                    'linear-gradient(rgba(255, 255, 255, 0) 60%, rgb(235, 248, 243) 55%)',
            },
        },

        brief_header_content: {
            ...theme.typography.header1,
            marginTop: theme.spacing(2),
            // background: 'red'
        },
        brief_footer: {
            margin: '0 auto',
            paddingTop: theme.spacing(16),
            // background: 'blue'
        },

        brief_footer_item_basic: {
            ...theme.typography.body4,
            textAlign: 'left',
            // background: 'purple'
        },

        brief_footer_item_highlighted: {
            ...theme.typography.body3,
            marginBottom: theme.spacing(8),
            marginTop: theme.spacing(8),
            // background: 'lightBlue'
        },
    },
    '@media (min-width: 1600px)': {
        brief_image: {
            position: 'absolute',
            top: '0',
            left: '16%',
            zIndex: -1,
            width: '104%',
            height: '104%',
        },
        brief_header: {
            width: '56%',
            marginTop: theme.spacing(24),
            paddingBottom: theme.spacing(24),
            position: 'relative',
            // background: 'yellow'
        },
        brief_header_headline: {
            paddingBottom: '0',
        },
        brief_header_title: {
            ...theme.typography.title1,
            // background: 'orange'
        },

        brief_header_content: {
            ...theme.typography.header1,
            marginTop: theme.spacing(2),
            // background: 'red'
        },
    },
});
export default useStyles;
