import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    main_container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '4.5rem',
    },
    paca_bf: {
        position: 'absolute',
        left: 0,
        top: '12%',
        zIndex: '-1',
    },
    paca_ja: {
        position: 'absolute',
        right: 0,
        top: '24%',
        zIndex: -1,
    },
});

export default useStyles;
