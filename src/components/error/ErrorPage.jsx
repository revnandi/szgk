import React from 'react';
import noMatch from '../../images/404.png';
import useStyles from './Style';

function ErrorPage() {
    const classes = useStyles();
    return (
        <div className={classes.error_container}>
            <img
                className={classes.error_image}
                src={noMatch}
                alt="404"
                width="100%"
                height="100%"
            />
        </div>
    );
}

export default ErrorPage;
