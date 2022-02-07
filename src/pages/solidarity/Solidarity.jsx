/* eslint-disable react/no-array-index-key */
// TODO: connect to cms
import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import useStyles from './Style';
import { solidarityContent } from '../../data/solidarity';
import SocialShare from '../../components/socialShare/SocialShare';
import Footer from '../../components/footer/Footer';
import Blobs from '../../components/blobs/Blobs';
import { BLOBS } from '../../constants/blobs';

function Solidarity() {
    const classes = useStyles();

    function paragraphLoop(contentList) {
        return contentList.map((content, index) => {
            return (
                <Fade>
                    <p className={classes.paragraph} key={index}>
                        {content}
                    </p>
                </Fade>
            );
        });
    }

    return (
        <>
            <Blobs blobIndexes={[BLOBS.RED_RIGHT, BLOBS.GREEN_BOTTOM]} />
            <main className={classes.main_container}>
                <Container maxWidth="lg">
                    <Grid
                        container
                        spacing={4}
                        style={{
                            width: '100%',
                            margin: '0 auto',
                            paddingTop: '7.5rem',
                        }}
                    >
                        <Grid item xs={12} sm={12} md={8} lg={7}>
                            <Fade>
                                <h1 className={classes.main_title}>
                                    {solidarityContent.title}
                                </h1>
                            </Fade>
                        </Grid>
                        <Grid
                            component="section"
                            item
                            xs={12}
                            sm={12}
                            md={8}
                            lg={7}
                        >
                            {paragraphLoop(solidarityContent.body)}
                        </Grid>
                        <Grid
                            component="section"
                            item
                            xs={12}
                            sm={12}
                            md={8}
                            lg={7}
                        >
                            <SocialShare
                                title="Kik vagyunk? | Szolidáris Gazdaság Központ"
                                description="A Szolidáris Gazdaság Központ 2019-ben alakult a gazdasági demokrácia elvei szerint működő szervezetek támogatása és létrehozásuk elősegítése céljából..."
                            />
                        </Grid>
                    </Grid>
                </Container>
            </main>
            <Footer stretchHeight={false} />
        </>
    );
}

export default Solidarity;
