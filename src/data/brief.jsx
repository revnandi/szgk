import React from 'react';
import { t } from '../i18n';

// eslint-disable-next-line import/prefer-default-export
export const brief = {
    title: t('BRIEF_TITLE'),
    subtitle: t('BRIEF_SUBTITLE'),
    paragraphs: [
        t('BRIEF_P1'),
        <>
            <b>{t('BRIEF_P2')}</b>
        </>,
        t('BRIEF_P3'),
    ],
};
