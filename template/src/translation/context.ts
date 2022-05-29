import {createContext} from 'react';

export interface LocalizationContextProps {
    t: (translationKey: string) => string;
}

const LocalizationContext = createContext<LocalizationContextProps>({
    t: () => '',
});

export default LocalizationContext;
