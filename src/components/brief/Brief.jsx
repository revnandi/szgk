import React from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import useStyles from './Style';
import { brief } from '../../data/brief';
import illusztracio from '../../images/nagy_illu.svg';

function Brief() {
    const classes = useStyles();
    const { title, subtitle, paragraphs } = brief;

    return (
        <section className={classes.brief}>
            <Grid
                container
                spacing={4}
                style={{ width: '100%', margin: '0' }}
                className={classes.brief_header}
            >
                <Grid
                    item
                    xs={12}
                    md={12}
                    className={classes.brief_header_headline}
                >
                    <Fade>
                        <h1 className={classes.brief_header_title}>
                            <mark>{title}</mark>
                        </h1>
                    </Fade>
                </Grid>
                <Grid item xs={12} md={4} className={classes.brief_header_text}>
                    <Fade>
                        <div className={classes.brief_header_content}>
                            {subtitle}
                        </div>
                    </Fade>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={8}
                    className={classes.brief_header_illustration}
                    style={{ width: '100%', paddingTop: '0' }}
                >
                    <Fade delay={400}>
                        <figure className={classes.hero_image}>
                            <img
                                src={illusztracio}
                                alt="szolidáris gazdaság illusztráció"
                            />
                        </figure>
                    </Fade>
                </Grid>
            </Grid>
            <Grid container spacing={4} style={{ width: '100%', margin: '0' }}>
                <Grid item xs={12} md={6} className={classes.brief_footer}>
                    <Fade>
                        <div className={classes.brief_footer_item_basic}>
                            {paragraphs[0]}
                        </div>
                    </Fade>
                    <div className={classes.brief_footer_item_highlighted}>
                        <Fade left>
                            <mark
                                style={{
                                    background:
                                        'linear-gradient(rgba(255,255,255,0) 60%, #EBF8F3 55%)',
                                }}
                            >
                                {paragraphs[1]}
                            </mark>
                        </Fade>
                    </div>
                    <Fade>
                        <div className={classes.brief_footer_item_basic}>
                            {paragraphs[2]}
                        </div>
                    </Fade>
                </Grid>
            </Grid>
        </section>
    );
}

export default Brief;
