/* eslint-disable react/prop-types */
import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';
import { footer } from '../../data/footer';
import useStyles from './Style';
import kapcsolat from '../../images/kapcsolat.svg';

function Footer({ stretchHeight }) {
    const classes = useStyles();

    return (
        <footer
            className={
                stretchHeight ? classes.footer_stretched : classes.footer
            }
        >
            <Bounce top>
                <div className={classes.footer_title}>{footer.title}</div>
            </Bounce>
            <Flip delay={400} left>
                <div className={classes.footer_contact}>{footer.email}</div>
            </Flip>
            <Bounce bottom>
                <div className={classes.footer_image}>
                    <img src={kapcsolat} alt="kapcsolat" width="300" />
                </div>
            </Bounce>
        </footer>
    );
}

export default Footer;
