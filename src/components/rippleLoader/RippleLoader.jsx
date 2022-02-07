import React from 'react';
import { Ripple } from 'react-spinners-css';
import useStyles from './Style';

function RippleLoader() {
    const classes = useStyles();

    return (
        <div className={classes.ripple_container}>
            <Ripple size={200} color="#ebf8f3" />
        </div>
    );
}

export default RippleLoader;
