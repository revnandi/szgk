import React from 'react';
import Container from '@material-ui/core/Container';
import Brief from '../../components/brief/Brief';
import Cards from '../../components/cards/Cards';
import useStyles from './Style';
import Footer from '../../components/footer/Footer';
import Blobs from '../../components/blobs/Blobs';
import { BLOBS } from '../../constants/blobs';

function Landing() {
    const classes = useStyles();
    return (
        <>
            <Blobs
                blobIndexes={[
                    BLOBS.RED_RIGHT,
                    BLOBS.GREEN_LEFT,
                    BLOBS.GREEN_BOTTOM,
                ]}
            />
            <main className={classes.main_container}>
                <Container maxWidth="lg">
                    <Brief />
                    <Cards />
                </Container>
            </main>
            <Footer stretchHeight={false} />
        </>
    );
}

export default Landing;
