import React from 'react';
import { t } from '../i18n';

// eslint-disable-next-line import/prefer-default-export
export const areas = [
    {
        header: t('AREA_1_HEADER'),
        title: t('AREA_1_TITLE'),
        paragraphs: [
            <>
                {t('AREA_1_P1_1')}
                <strong>{t('AREA_1_P1_STRONG')}</strong>
                {t('AREA_1_P1_2')}
            </>,
            <>
                {t('AREA_1_P2_1')}
                <strong>{t('AREA_1_P2_STRONG_1')}</strong>
                {t('AREA_1_P2_2')}
                <strong>{t('AREA_1_P2_STRONG_2')}</strong>
                {t('AREA_1_P2_3')}
                <strong>{t('AREA_1_P2_STRONG_3')}</strong>
            </>,
            <>
                {t('AREA_1_P3_1')}
                <strong>{t('AREA_1_P3_STRONG_1')}</strong>
                {t('AREA_1_P3_2')}
            </>,
        ],
    },
    {
        header: t('AREA_2_HEADER'),
        title: t('AREA_2_TITLE'),
        paragraphs: [
            t('AREA_2_P1'),
            <>
                {t('AREA_2_P2_1')}
                <strong>{t('AREA_2_P2_STRONG')}</strong>
                {t('AREA_2_P2_2')}
            </>,
        ],
    },
    {
        header: t('AREA_3_HEADER'),
        title: t('AREA_3_TITLE'),
        paragraphs: [
            <>
                <strong>{t('AREA_3_P1_STRONG')}</strong>
                {t('AREA_3_P1')}
            </>,
            <>
                <strong>{t('AREA_3_P2_STRONG_1')}</strong>
                {t('AREA_3_P2_1')}
                <strong>{t('AREA_3_P2_STRONG_2')}</strong>
                {t('AREA_3_P2_2')}
                <strong>{t('AREA_3_P2_STRONG_2')}</strong>
                {t('AREA_3_P2_3')}
            </>,
        ],
    },
    {
        header: t('AREA_4_HEADER'),
        title: t('AREA_4_TITLE'),
        paragraphs: [
            <>
                <strong>{t('AREA_4_P1_STRONG')}</strong>
                {t('AREA_4_P1')}
            </>,
            <>
                {t('AREA_4_P2_1')}
                <strong>{t('AREA_4_P2_STRONG')}</strong>
                {t('AREA_4_P2_2')}
            </>,
        ],
    },
];
