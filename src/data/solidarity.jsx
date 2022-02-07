/* eslint-disable import/prefer-default-export */
import React from 'react';
import { t } from '../i18n';

export const solidarityContent = {
    title: t('SOL_EC'),
    body: [
        <>
            {t('SOL_BODY1_1')}
            <strong>{t('SOL_BODY1_STRONG')}</strong>
            {t('SOL_BODY1_2')}
        </>,
        t('SOL_BODY2'),
        <>
            {t('SOL_BODY3_1')}
            <strong>{t('SOL_BODY3_STRONG')}</strong>
            {t('SOL_BODY3_2')}
        </>,
        <>
            {t('SOL_BODY4_1')}
            <strong>{t('SOL_BODY4_STRONG')}</strong>
            {t('SOL_BODY4_2')}
        </>,
        t('SOL_BODY5'),
        t('SOL_BODY6'),
        t('SOL_BODY7'),
    ],
};
