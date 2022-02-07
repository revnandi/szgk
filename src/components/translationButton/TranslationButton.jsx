import React from 'react';
import useStyles from './Style';
import { changeLanguage, getCurrentLanguage } from '../../i18n';

function TranslationButton() {
    const classes = useStyles();

    return (
        <>
            <button
                type="button"
                className={
                    getCurrentLanguage() !== null &&
                    getCurrentLanguage() === 'en'
                        ? `${classes.language_button} ${classes.language_button_active}`
                        : `${classes.language_button}`
                }
                onClick={() => changeLanguage('hu')}
            >
                Magyar
            </button>
            <button
                type="button"
                className={
                    getCurrentLanguage() == null ||
                    getCurrentLanguage() === 'hu'
                        ? `${classes.language_button} ${classes.language_button_active}`
                        : `${classes.language_button}`
                }
                onClick={() => changeLanguage('en')}
            >
                English
            </button>
        </>
    );
}

export default TranslationButton;
