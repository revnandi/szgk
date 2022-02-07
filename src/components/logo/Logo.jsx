import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './Style';
import logo from '../../images/logos/logo.svg';
import { t } from '../../i18n';

function Logo() {
    const classes = useStyles();

    function render() {
        return (
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className={classes.logo_container}>
                    <img src={logo} alt="szgk logó" />
                    <div className={classes.logo_label}>{t('SZGK_LOGO')}</div>
                </div>
            </Link>
        );
    }

    return render();
}

export default Logo;
