import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import axios from 'axios';
import translationEN from './translations/en-US.json';
import translationHU from './translations/hu-HU.json';

// the translations
const resources = {
    en: {
        translation: translationEN,
    },
    hu: {
        translation: translationHU,
    },
};
function setLanguage() {
    return localStorage.getItem('lng');
}

i18n.use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
        lng: setLanguage(),
        lngs: ['hu', 'en'],
        fallbackLng: 'hu',
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;

export function t(a, b) {
    return i18n.t(a, b);
}

export function changeLanguage(lng) {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
    document.location.reload();
}

export function getCurrentLanguage() {
    if (!i18n.language) {
        axios
            .get('https://ipapi.co/json/')
            .then((response) => {
                const { data } = response;
                console.log('countryName: ', data.country_name);
                console.log('countryCode: ', data.country_calling_code);
            })
            .catch((error) => {
                console.log(error);
            });
        changeLanguage('hu');
    }
    return i18n.language;
}
