import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from 'react-reveal/Slide';
import useStyles from './Style';
import logoMtsz from '../../images/partners/logo_mtsz.png';
import logoFes from '../../images/partners/logo_fes.png';
import logoPkk from '../../images/partners/logo_pkk.png';
import logoECF from '../../images/partners/logo_ecf.png';

function PartnerLogos() {
    const classes = useStyles();

    function renderGridRow(src, alt) {
        return (
            <Grid
                component="figure"
                className={classes.partner_image}
                item
                xs={6}
                sm={4}
                md={3}
                lg={3}
            >
                <img src={src} alt={alt} />
            </Grid>
        );
    }

    return (
        <section>
            <Slide left>
                <Grid
                    container
                    spacing={4}
                    style={{ width: '100%', margin: '0' }}
                >
                    {renderGridRow(
                        logoECF,
                        'European Cultural Foundation logó'
                    )}
                    {renderGridRow(
                        logoMtsz,
                        'Magyar Természetvédők Szövetsége logó'
                    )}
                    {renderGridRow(logoFes, 'Friedrich Ebert Alapítvány logó')}
                    {renderGridRow(logoPkk, 'Periféria Központ logó')}
                </Grid>
            </Slide>
        </section>
    );
}

export default PartnerLogos;
