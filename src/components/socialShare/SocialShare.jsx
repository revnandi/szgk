import React from 'react';
import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    TumblrShareButton,
    TumblrIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from 'react-share';
import Slide from 'react-reveal/Slide';
import { t } from '../../i18n';
import colors from '../../theme/colors';
import useStyles from './Style';

// eslint-disable-next-line react/prop-types
function SocialShare({ title, description }) {
    const classes = useStyles();
    const shareUrl = window.location.origin;
    const iconSize = 32;
    function renderSocialMediaButtonWrapper(content) {
        return <div className={classes.social_btn_container}>{content}</div>;
    }

    function renderSocialMediaIconLabel(label) {
        return <div className={classes.social_icons_label}>{label}</div>;
    }

    return (
        <Slide cascade left>
            <div className={classes.social_icons}>
                <h3 className={classes.social_icons_header}>{t('SHARE')}</h3>
                {renderSocialMediaButtonWrapper(
                    <EmailShareButton
                        className={classes.social_icons_button}
                        url={shareUrl}
                        subject={title}
                        body={description}
                    >
                        <EmailIcon
                            size={iconSize}
                            round
                            bgStyle={{ fill: 'transparent' }}
                            iconFillColor={colors.primary}
                            style={{
                                display: 'inline-flex',
                                border: `2px solid ${colors.primary}`,
                                borderRadius: '50%',
                            }}
                        />
                        {renderSocialMediaIconLabel('E-mail')}
                    </EmailShareButton>
                )}
                {renderSocialMediaButtonWrapper(
                    <FacebookShareButton
                        className={classes.social_icons_button}
                        url={shareUrl}
                        quote={description}
                    >
                        <FacebookIcon
                            size={iconSize}
                            round
                            bgStyle={{ fill: 'transparent' }}
                            iconFillColor={colors.primary}
                            style={{
                                display: 'inline-flex',
                                border: `2px solid ${colors.primary}`,
                                borderRadius: '50%',
                            }}
                        />
                        {renderSocialMediaIconLabel('Facebook')}
                    </FacebookShareButton>
                )}
                {renderSocialMediaButtonWrapper(
                    <TelegramShareButton
                        className={classes.social_icons_button}
                        url={shareUrl}
                        title={title}
                    >
                        <TelegramIcon
                            size={iconSize}
                            round
                            bgStyle={{ fill: 'transparent' }}
                            iconFillColor={colors.primary}
                            style={{
                                display: 'inline-flex',
                                border: `2px solid ${colors.primary}`,
                                borderRadius: '50%',
                            }}
                        />
                        {renderSocialMediaIconLabel('Telegram')}
                    </TelegramShareButton>
                )}
                {renderSocialMediaButtonWrapper(
                    <TwitterShareButton
                        className={classes.social_icons_button}
                        url={shareUrl}
                        title={title}
                    >
                        <TwitterIcon
                            size={iconSize}
                            round
                            bgStyle={{ fill: 'transparent' }}
                            iconFillColor={colors.primary}
                            style={{
                                display: 'inline-flex',
                                border: `2px solid ${colors.primary}`,
                                borderRadius: '50%',
                            }}
                        />
                        {renderSocialMediaIconLabel('Twitter')}
                    </TwitterShareButton>
                )}
                {renderSocialMediaButtonWrapper(
                    <TumblrShareButton
                        className={classes.social_icons_button}
                        url={shareUrl}
                        title={title}
                    >
                        <TumblrIcon
                            size={iconSize}
                            round
                            bgStyle={{ fill: 'transparent' }}
                            iconFillColor={colors.primary}
                            style={{
                                display: 'inline-flex',
                                border: `2px solid ${colors.primary}`,
                                borderRadius: '50%',
                            }}
                        />
                        {renderSocialMediaIconLabel('Tumblr')}
                    </TumblrShareButton>
                )}
                {renderSocialMediaButtonWrapper(
                    <WhatsappShareButton
                        className={classes.social_icons_button}
                        url={shareUrl}
                        title={title}
                        separator=":: "
                    >
                        <WhatsappIcon
                            size={iconSize}
                            round
                            bgStyle={{ fill: 'transparent' }}
                            iconFillColor={colors.primary}
                            style={{
                                display: 'inline-flex',
                                border: `2px solid ${colors.primary}`,
                                borderRadius: '50%',
                            }}
                        />
                        {renderSocialMediaIconLabel('Whatsapp')}
                    </WhatsappShareButton>
                )}
            </div>
        </Slide>
    );
}

export default SocialShare;
