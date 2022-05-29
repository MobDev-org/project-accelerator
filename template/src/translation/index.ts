import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';

import en from './ba';

const locales = RNLocalize.getLocales();
export const supportedLocales = ['ba'];

let findInSupportedLocales = () => {
    let foundLanaguage = supportedLocales.find(
        locale => locale === locales[0].languageCode,
    );

    return foundLanaguage ? foundLanaguage : 'ba';
};

i18n.fallbacks = true;
i18n.translations = {en};
if (Array.isArray(locales)) {
    i18n.locale = findInSupportedLocales();
}
export default i18n;
