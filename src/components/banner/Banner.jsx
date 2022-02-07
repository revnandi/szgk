import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowAltCircleRight,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import useLocalStorage from '../../hooks/useLocalStorage';
import useStyles from './Style';

function Banner() {
    const [szgkBannerClosed, setSzgkBannerClosed] = useLocalStorage(
        'szgkBannerIsOpen',
        false
    );
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(false);
        // console.log(removeCookie);
        setSzgkBannerClosed(true);
    };

    useEffect(() => {
        if (!szgkBannerClosed) {
            setIsOpen(true);
        }
    }, []);

    function render() {
        return (
            <section
                className={[
                    classes.container,
                    isOpen ? classes.visible : '',
                ].join(' ')}
            >
                <div className={classes.buttonContainer}>
                    <FontAwesomeIcon
                        onClick={handleClick}
                        icon={faTimes}
                        className={classes.closeIcon}
                    />
                </div>
                <Container>
                    <div className={classes.inner}>
                        <h1 className={classes.header}>
                            Magyarország első energiaközösségének beindításán
                            dolgozunk!
                        </h1>
                        <p className={classes.text}>
                            Arra kérünk, hogy ha tudsz, akkor segíts nekünk
                            energiaközösséget létrehozni a Kazán Közösségi
                            Házban, hogy közösen termelhessen magának zöldáramot
                            sok itt működő civil szervezet.
                        </p>
                        <div className={classes.linkContainer}>
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className={classes.icon}
                            />
                            <p className={classes.linkText}>
                                <a
                                    className={classes.link}
                                    href="https://adjukossze.hu/adomanygyujtes/kozossegi-napenergiat-a-golyaba-2429"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    https://adjukossze.hu/adomanygyujtes/kozossegi-napenergiat-a-golyaba-2429
                                </a>
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        );
    }
    return render();
}

export default Banner;
