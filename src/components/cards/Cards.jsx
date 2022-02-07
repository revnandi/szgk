import React from 'react';
import Fade from 'react-reveal/Fade';
import useStyles from './Style';
import tudas_ko from '../../images/tudaskozpont.svg';
import lakas_szo from '../../images/lakasszovetkezet.svg';
import halozat from '../../images/halozatosodas.svg';
import kozos_en from '../../images/kozossegi_energia.svg';
import Card from '../card/Card';
import { areas } from '../../data/areas';

function Cards() {
    const classes = useStyles();

    return (
        <section className={classes.areas}>
            <Fade>
                <Card textData={areas[0]} image={tudas_ko} leftAligned />
            </Fade>
            <Fade>
                <Card
                    textData={areas[1]}
                    image={lakas_szo}
                    leftAligned={false}
                />
            </Fade>
            <Fade>
                <Card textData={areas[2]} image={halozat} leftAligned />
            </Fade>
            <Fade>
                <Card
                    textData={areas[3]}
                    image={kozos_en}
                    leftAligned={false}
                />
            </Fade>
        </section>
    );
}

export default Cards;
