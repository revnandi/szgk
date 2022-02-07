import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import { whoContent } from '../../data/who';
import SocialShare from '../../components/socialShare/SocialShare';
import Headshot from '../../components/headshot/Headshot';
import RippleLoader from '../../components/rippleLoader/RippleLoader';
import { getCurrentLanguage } from '../../i18n';
import useStyles from './Style';
import Blobs from '../../components/blobs/Blobs';
import Footer from '../../components/footer/Footer';
import { BLOBS } from '../../constants/blobs';
import {
    getCollectionUrl,
    getSingletonUrl,
    getImageUrl,
} from '../../utils/api';

function Who() {
    const classes = useStyles();
    const [memberData, setMemberData] = useState([]);
    const [whoWeAre, setWhoWeAre] = useState();
    const [activityAreas, setActivityAreas] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const onLoad = useCallback(() => {
        setLoaded(true);
    }, []);

    useEffect(() => {
        axios.get(getCollectionUrl('members')).then((response) => {
            setMemberData(response.data.entries);
        });
        axios.get(getSingletonUrl('who_we_are')).then((response) => {
            setWhoWeAre(response.data);
            onLoad();
        });
        axios.get(getCollectionUrl('areas_of_activity')).then((response) => {
            setActivityAreas(response.data.entries);
        });
    }, []);

    function renderMainParagraphs() {
        return [
            <Fade>
                <div
                    className={classes.paragraph}
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html:
                            getCurrentLanguage() === 'hu'
                                ? whoWeAre.paragraph_1_hu
                                : whoWeAre.paragraph_1,
                    }}
                />
            </Fade>,
            <Fade>
                <div
                    className={classes.paragraph}
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html:
                            getCurrentLanguage() === 'hu'
                                ? whoWeAre.paragraph_2_hu
                                : whoWeAre.paragraph_2,
                    }}
                />
            </Fade>,
        ];
    }

    function renderGridRow(content) {
        return (
            <Grid item xs={12} sm={12} md={8} lg={7}>
                {content}
            </Grid>
        );
    }

    function renderMember(member) {
        let picSrc;
        let fullName;
        let description;
        let key;
        try {
            picSrc = member.image ? getImageUrl(member.image.path) : '';
            fullName =
                getCurrentLanguage() === 'hu' ? member.name_hu : member.name;
            description =
                getCurrentLanguage() === 'hu'
                    ? member.description_hu
                    : member.description;
            // eslint-disable-next-line no-underscore-dangle
            key = member._id;
        } catch (e) {
            return null;
        }

        // without description in the current language we don't render anything
        if (!description) {
            return null;
        }

        // more shape diversity
        const shapes = [
            '4rem 6rem 4rem 6rem',
            '6rem 6rem 4rem 6rem',
            '6rem 6rem 6rem 4rem',
            '6rem 4rem 6rem 4rem',
        ];
        const style = { borderRadius: shapes[Math.floor(Math.random() * 3)] };

        return (
            <div key={key} className={classes.members_container}>
                <div className={classes.image_container}>
                    <Fade>
                        <Headshot src={picSrc} name={fullName} style={style} />
                    </Fade>
                </div>
                <div>
                    <Fade>
                        <span className={classes.name}>{fullName}</span>
                        <span> </span>
                        <span className={classes.introduction}>
                            {description}
                        </span>
                    </Fade>
                </div>
            </div>
        );
    }

    function renderMembers() {
        return memberData.map((member, i) => {
            return renderMember(member, i);
        });
    }

    function renderArticle(title, body) {
        return (
            <>
                <Fade delay={200}>
                    <h1 className={classes.sub_title}>{title}</h1>
                </Fade>
                <Fade>
                    <div
                        className={classes.paragraph}
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                            __html: body,
                        }}
                    />
                </Fade>
            </>
        );
    }

    function renderActivityAreas() {
        const areas = activityAreas.map((a) =>
            // renderArticle(a[`${lng}_subtitle`], a[`${lng}_paragraph`])
            renderArticle(
                a[getCurrentLanguage() === 'hu' ? 'name_hu' : 'name'],
                a[
                    getCurrentLanguage() === 'hu'
                        ? 'description_hu'
                        : 'description'
                ]
            )
        );
        return renderGridRow(areas);
    }

    function render() {
        if (!loaded) {
            return <RippleLoader />;
        }
        if (!whoWeAre || activityAreas.length < 0) {
            return <></>;
        }
        const lng = getCurrentLanguage();

        return (
            <>
                <Blobs blobIndexes={[BLOBS.RED_RIGHT, BLOBS.GREEN_BOTTOM]} />
                <main className={classes.main_container}>
                    <div className={classes.article_container}>
                        <Grid
                            container
                            spacing={4}
                            className={classes.grid_container_style}
                        >
                            {renderGridRow(
                                <Fade>
                                    <h1 className={classes.main_title}>
                                        {getCurrentLanguage() === 'hu'
                                            ? whoWeAre.header_hu
                                            : whoWeAre.header}
                                    </h1>
                                </Fade>
                            )}
                            {renderGridRow(renderMainParagraphs(lng))}
                            {renderGridRow(
                                <Fade>
                                    <div className={classes.highlight}>
                                        {whoContent.highlight}
                                    </div>
                                </Fade>
                            )}
                            {renderActivityAreas(lng)}

                            {renderGridRow(
                                <SocialShare
                                    title="Kik vagyunk? | Szolidáris Gazdaság Központ"
                                    // eslint-disable-next-line max-len
                                    description="A Szolidáris Gazdaság Központ 2019-ben alakult a gazdasági demokrácia elvei szerint működő szervezetek támogatása és létrehozásuk elősegítése céljából..."
                                />
                            )}
                        </Grid>
                    </div>
                    <div className={classes.introduction_container}>
                        {renderMembers()}
                    </div>
                </main>
                <Footer stretchHeight={false} />
            </>
        );
    }
    return render();
}
export default Who;
