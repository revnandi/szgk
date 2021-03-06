/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import useStyles from './Style';
import { projectsContent } from '../../data/projects';
import PartnerLogos from '../../components/partnerLogos/PartnerLogos';
import SocialShare from '../../components/socialShare/SocialShare';
import Footer from '../../components/footer/Footer';
import Blobs from '../../components/blobs/Blobs';
import { BLOBS } from '../../constants/blobs';
import PDFButton from '../../components/pdfButton/PDFButton';
import { t } from '../../i18n';

function Projects() {
    const classes = useStyles();

    function paragraphLoop(contentList) {
        return contentList.map(function (content, index) {
            return (
                <p className={classes.paragraph} key={index}>
                    {content}
                </p>
            );
        });
    }

    function listLoop(contentList) {
        return contentList.map((content, index) => {
            return (
                <li className={classes.list_item} key={index}>
                    {content}
                </li>
            );
        });
    }

    function renderPDFButtons(huTitle, huFilename, engTitle, engFilaneme) {
        return (
            <div className={classes.PDF_buttons_container}>
                <Zoom>
                    <PDFButton
                        label={`${t('DOWNLOAD_DOCUMENT')} (HU)`}
                        filename={huFilename}
                        title={huTitle}
                    />
                </Zoom>
                <Zoom>
                    <PDFButton
                        label={`${t('DOWNLOAD_DOCUMENT')} (EN)`}
                        filename={engFilaneme}
                        title={engTitle}
                    />
                </Zoom>
            </div>
        );
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
                            margin: '0 0 0 0',
                            paddingTop: '7.5rem',
                        }}
                    >
                        <Grid item xs={12} sm={7} md={8} lg={7}>
                            <Fade>
                                <h1 className={classes.main_title}>
                                    {projectsContent.title}
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
                            <Fade>{paragraphLoop(projectsContent.body)}</Fade>
                            <Fade>
                                <ul className={classes.list}>
                                    {listLoop(projectsContent.list_items)}
                                </ul>
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
                            <Fade>
                                <h1 className={classes.sub_title}>
                                    {projectsContent.subtitle_1}
                                </h1>
                                <p className={classes.paragraph}>
                                    {projectsContent.secondary_paragraph_1}
                                </p>
                                {renderPDFButtons(
                                    'H??l??zat',
                                    'halozat',
                                    'Organizational development',
                                    'organizational_development'
                                )}
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
                            <Fade>
                                <h1 className={classes.sub_title}>
                                    {projectsContent.subtitle_2}
                                </h1>
                                <p className={classes.paragraph}>
                                    {projectsContent.secondary_paragraph_2}
                                </p>
                                {renderPDFButtons(
                                    'B??rl??i lak??ssz??vetkezet',
                                    'berlo_lakszov',
                                    'Housing in Hungary',
                                    'housing_in_hungary'
                                )}
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
                            <Fade>
                                <h1 className={classes.sub_title}>
                                    {projectsContent.subtitle_3}
                                </h1>
                                <p className={classes.paragraph}>
                                    {projectsContent.secondary_paragraph_3}
                                </p>
                                <p>
                                    A napelemboom s??t??t oldala tanulm??ny,
                                    2021.december.
                                </p>
                                {renderPDFButtons('napelemboom', 'napelemboom')}
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
                            <Fade>
                                <h1 className={classes.sub_title}>
                                    {projectsContent.subtitle_4}
                                </h1>
                                <p className={classes.paragraph}>
                                    {projectsContent.secondary_paragraph_4}
                                </p>
                                {renderPDFButtons(
                                    'Gondoskod??s',
                                    'gondoskodas',
                                    'Care Work',
                                    'care_work'
                                )}
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
                            <Fade>
                                <h1 className={classes.sub_title}>
                                    {projectsContent.subtitle_5}
                                </h1>
                                <p className={classes.paragraph}>
                                    {projectsContent.secondary_paragraph_5}
                                </p>
                                {renderPDFButtons(
                                    '??lelmiszer-??nrendelkez??s',
                                    'elelmiszer_onrendelkezes',
                                    'Food Sovereignity',
                                    'food_sovereignity'
                                )}
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
                            <Fade>
                                <h1 className={classes.sub_title}>
                                    {t('CULTURE')}
                                </h1>
                                <p className={classes.paragraph}>
                                    {t('CULTURE_TEXT')}
                                </p>
                                {renderPDFButtons(
                                    'Kult??ra',
                                    'kultura',
                                    'Solidarity economy, solidaristic culture',
                                    'solidarity_economy_solidaristic_culture'
                                )}
                            </Fade>
                        </Grid>
                    </Grid>
                    <PartnerLogos />
                    <Grid
                        container
                        spacing={4}
                        style={{ width: '100%', margin: '0 0 0 0' }}
                    >
                        <Grid component="section" item xs={12} md={7}>
                            <SocialShare
                                title="Projektjeink | Szolid??ris Gazdas??g K??zpont"
                                description="Tev??kenys??geink eg??sz sora ir??nyul a magyarorsz??gi szolid??ris gazdas??gi ??kosziszt??ma fejleszt??s??re. T??bbek k??zt igyeksz??nk h??l??zatba szervezni ??s egy??ttm??k??d??sre sarkallni a m??r m??k??d?? szolid??ris gazdas??gi szervezeteket, emellett partnerszervezeteinkkel k??z??sen mintaprojekteket ??p??t??nk, v??g??l pedig akt??van keress??k az egy??ttm??k??d??st potenci??lis partnerszervezetekkel ??s mozgalmakkal (p??ld??ul szakszervezetekkel)..."
                            />
                        </Grid>
                    </Grid>
                </Container>
            </main>
            <Footer stretchHeight={false} />
        </>
    );
}

export default Projects;
