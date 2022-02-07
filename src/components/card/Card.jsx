import React from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import useStyles from './Style';
import uniqueID from '../../utils/uniqueIdGenerator';
import CustomExpansionPanel from '../expansionPanel/ExpansionPanel';
import useBreakPoint from '../../hooks/useBreakPoint';

function Card({ textData, image, leftAligned }) {
    const classes = useStyles();
    const width = useBreakPoint();

    function renderParagraphs() {
        if (width === 'lg' || width === 'xl') {
            return textData.paragraphs.map((p) => {
                return (
                    <div className={classes.article_content} key={uniqueID()}>
                        {p}
                    </div>
                );
            });
        }
        return (
            <>
                <div className={classes.article_content}>
                    {textData.paragraphs[0]}
                </div>
                <CustomExpansionPanel
                    contents={textData.paragraphs.slice(
                        1,
                        textData.paragraphs.length
                    )}
                />
            </>
        );
    }

    function renderImage() {
        return (
            <Grid item xs={12} md={6}>
                <Fade delay={400}>
                    <figure className={classes.article_image_container}>
                        <img
                            className={classes.article_image}
                            src={image}
                            alt="tudásközpont"
                            style={
                                leftAligned
                                    ? { transform: 'rotate(3deg)' }
                                    : { transform: 'rotate(-2deg)' }
                            }
                        />
                    </figure>
                </Fade>
            </Grid>
        );
    }

    function render() {
        return (
            <Grid
                container
                spacing={4}
                style={{ width: '100%', margin: '7.5rem 0 0 0' }}
                className={classes.article_container}
            >
                <Grid item xs={12} md={6}>
                    <Fade>
                        <article className={classes.article_main}>
                            <div className={classes.article_area}>
                                {textData.header}
                            </div>
                            <h1 className={classes.article_title}>
                                {textData.title}
                            </h1>
                            {renderParagraphs()}
                        </article>
                    </Fade>
                </Grid>
                {renderImage()}
            </Grid>
        );
    }

    return render();
}

export default Card;
