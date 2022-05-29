import {DefaultTheme, configureFonts} from 'react-native-paper';
import {Fonts} from 'react-native-paper/lib/typescript/types';
// import constants from '@constants';

type FontConfig = {ios: Fonts; android: Fonts};

const fontConfig: FontConfig = {
    ios: {
        // @ts-ignore
        extraBold: {
            fontFamily: 'PlusJakartaSans-ExtraBold',
            fontWeight: '800',
        },
        bold: {
            fontFamily: 'PlusJakartaSans-Bold',
            fontWeight: '700',
        },
        semiBold: {
            fontFamily: 'PlusJakartaSans-SemiBold',
            fontWeight: '600',
        },
        medium: {
            fontFamily: 'PlusJakartaSans-Medium',
            fontWeight: '500',
        },
        regular: {
            fontFamily: 'PlusJakartaSans-Regular',
            fontWeight: '400',
        },
        light: {
            fontFamily: 'PlusJakartaSans-Light',
            fontWeight: '300',
        },
        thin: {
            fontFamily: 'PlusJakartaSans-ExtraLight',
            fontWeight: '200',
        },
    },
    android: {
        // @ts-ignore
        extraBold: {
            fontFamily: 'PlusJakartaSans-ExtraBold',
        },
        bold: {
            fontFamily: 'PlusJakartaSans-Bold',
        },
        semiBold: {
            fontFamily: 'PlusJakartaSans-SemiBold',
        },
        regular: {
            fontFamily: 'PlusJakartaSans-Regular',
        },
        medium: {
            fontFamily: 'PlusJakartaSans-Medium',
        },
        light: {
            fontFamily: 'PlusJakartaSans-Light',
        },
        thin: {
            fontFamily: 'PlusJakartaSans-ExtraLight',
        },
    },
};

export const baseTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#E2A821',
        black: '#100F10CC',
        gray: '#100F1066',
        orange: '#E2A821',
        white: '#FFFFFF',
        shadow: '#50576612',
        lightOrange: '#E2A8211A',
        lightOrangeBorder: '#E2A82133',
        lightGray: '#70707033',
        orangeNew: '#E2A82199',
        text: '#3F4047',
    },
    fonts: configureFonts(fontConfig),
};

export const lightTheme = {
    ...baseTheme,
    colors: {
        ...baseTheme.colors,
        // background: '#FCECDB',
        background: '#fff',
    },
};

export const darkTheme = {
    ...lightTheme,
};
