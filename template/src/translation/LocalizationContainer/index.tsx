import React, {useState, useMemo, useEffect} from 'react';
import {useSelector} from 'react-redux';

import LocalizationContext from 'translation/context';
import i18n from 'i18n-js';
import Localization from 'translation';
import {RootState} from 'store';

const LocalizationContainer = (props: any) => {
    let user = useSelector((state: RootState) => state.user);
    const [locale, setLocale] = useState(user.locale ?? Localization.locale);

    useEffect(() => {
        let loc = user.locale ?? Localization.locale;
        Localization.locale = loc;
        setLocale(loc);
        i18n.locale = loc;
    }, [locale, user]);

    const localizationContext: {t: Function} = useMemo(
        () => ({
            t: (scope, options) => i18n.t(scope, {locale, ...options}),
            locale,
            setLocale,
        }),
        [locale],
    );

    return (
        <LocalizationContext.Provider value={localizationContext}>
            {props?.children}
        </LocalizationContext.Provider>
    );
};

export default LocalizationContainer;
