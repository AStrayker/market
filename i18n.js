import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        ru: {
            translation: {
                "welcome": "Добро пожаловать на Рынок",
                "categories": "Категории"
            }
        },
        uk: {
            translation: {
                "welcome": "Ласкаво просимо на Ринок",
                "categories": "Категорії"
            }
        }
    },
    lng: navigator.language.startsWith('uk') ? 'uk' : 'ru',
    fallbackLng: 'ru',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
