/* eslint-disable import/prefer-default-export */
import React from 'react';
import { t } from '../i18n';

export const projectsContent = {
    title: t('OUR_PROJECTS'),
    body: [t('PROJ_BODY1'), t('PROJ_BODY2')],
    list_items: [t('PROJ_ITEM1'), t('PROJ_ITEM2')],
    subtitle_1: t('PROJ_1_SUB'),
    secondary_paragraph_1: (
        <>
            {t('PROJ_1_BODY_P1')}
            <strong>{t('PROJ_1_BODY_STRONG1')}</strong>
            {t('PROJ_1_BODY_P2')}
            <strong>{t('PROJ_1_BODY_STRONG2')}</strong>
            {t('PROJ_1_BODY_P3')}
            <strong>{t('PROJ_1_BODY_STRONG3')}</strong>
            {t('PROJ_1_BODY_P4')}
        </>
    ),
    subtitle_2: t('PROJ_2_SUB'),
    secondary_paragraph_2: (
        <>
            {t('PROJ_2_BODY_P1')}
            <strong>{t('PROJ_2_BODY_STRONG1')}</strong>
            {t('PROJ_2_BODY_P2')}
            <strong>{t('PROJ_2_BODY_STRONG2')}</strong>
            {t('PROJ_2_BODY_P3')}
        </>
    ),
    subtitle_3: t('PROJ_3_SUB'),
    secondary_paragraph_3: (
        <>
            {t('PROJ_3_BODY_P1')}
            <strong>{t('PROJ_3_BODY_STRONG1')}</strong>
            {t('PROJ_3_BODY_P2')}
            <strong>{t('PROJ_3_BODY_STRONG2')}</strong>
            {t('PROJ_3_BODY_P3')}
        </>
    ),
    subtitle_4: t('PROJ_4_SUB'),
    secondary_paragraph_4: (
        <>
            {t('PROJ_4_BODY_P1')}
            <strong>{t('PROJ_4_BODY_STRONG')}</strong>
            {t('PROJ_4_BODY_P2')}
        </>
    ),
    subtitle_5: t('PROJ_5_SUB'),
    secondary_paragraph_5: (
        <>
            {t('PROJ_5_BODY_P1')}
            <strong>{t('PROJ_5_BODY_STRONG')}</strong>
            {t('PROJ_5_BODY_P2')}
        </>
    ),
};
