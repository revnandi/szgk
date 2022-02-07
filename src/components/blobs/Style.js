import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    background_blob: {
        position: 'absolute',
    },
    blob_red_right: {
        top: '18%',
        right: '0',
        width: '10%',
    },
    blob_green_bottom: {
        bottom: '0',
        width: '100%',
    },
    blob_green_left: {
        top: '12.5%',
        left: '0',
        width: '18%',
    },
    blob_green_right: {
        top: '45%',
        right: '0',
        width: '12%',
    },
    '@media (max-width: 769px)': {
        blob_red_right: {
            display: 'none',
        },
        blob_green_left: {
            display: 'none',
        },
        blob_green_right: {
            display: 'none',
        },
    },
});
export default useStyles;
