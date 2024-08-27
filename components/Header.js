import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header>
            <h1>{t('welcome')}</h1>
            <button onClick={() => changeLanguage('ru')}>RU</button>
            <button onClick={() => changeLanguage('uk')}>UK</button>
        </header>
    );
}

export default Header;
