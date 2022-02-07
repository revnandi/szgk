/* eslint-disable max-len */
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import parse from 'html-react-parser';
import useStyles from './Style';
import { problemContent } from '../../data/problem';
import SocialShare from '../../components/socialShare/SocialShare';
import RippleLoader from '../../components/rippleLoader/RippleLoader';
import Footer from '../../components/footer/Footer';
import Blobs from '../../components/blobs/Blobs';
import { BLOBS } from '../../constants/blobs';
import { getCurrentLanguage } from '../../i18n';
import { getSingletonUrl } from '../../utils/api';

function Problem() {
    const classes = useStyles();
    const [problems, setProblems] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const onLoad = useCallback(() => {
        setLoaded(true);
    }, []);

    useEffect(() => {
        axios.get(getSingletonUrl('problem')).then((response) => {
            setProblems(response.data);
            onLoad();
        });
    }, []);

    function renderContent() {
        const lng = getCurrentLanguage();

        return (
            <Grid component="section" item xs={12} sm={12} md={8} lg={7}>
                <Fade>
                    <div className={classes.content}>
                        {parse(
                            lng === 'hu'
                                ? problems.content_hu
                                : problems.content
                        )}
                    </div>
                </Fade>
            </Grid>
        );
    }

    function render() {
        if (!loaded) {
            return <RippleLoader />;
        }

        return (
            <>
                <Blobs blobIndexes={[BLOBS.RED_RIGHT, BLOBS.GREEN_BOTTOM]} />
                <main className={classes.main_container}>
                    <Container maxWidth="lg">
                        <Grid
                            container
                            spacing={4}
                            className={classes.container_grid_style}
                        >
                            <Grid item xs={12} sm={12} md={8} lg={7}>
                                <Fade>
                                    <h1 className={classes.main_title}>
                                        {problemContent.title}
                                    </h1>
                                </Fade>
                            </Grid>
                            {renderContent()}
                            <Grid
                                component="section"
                                item
                                xs={12}
                                sm={12}
                                md={8}
                                lg={7}
                            >
                                <SocialShare
                                    title="A probléma | Szolidáris Gazdaság Központ"
                                    description="Az emberi társadalom és az ökológiai rendszerek életét ma globálisan veszély fenyegeti.Az egyik, a jelenben közvetlenül érezhető veszélyforrást az elhúzódó globális gazdasági válság jelenti..."
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </main>
                <Footer stretchHeight={false} />
            </>
        );
    }

    return render();
}

export default Problem;
