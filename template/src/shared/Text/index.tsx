import * as React from 'react';
// import {View, StyleSheet} from 'react-native';
import {Text as TextComp, useTheme} from 'react-native-paper';
import {Dimensions, TextStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export type TextColor =
    | 'white'
    | 'text'
    | 'primary'
    | 'error'
    | 'disabled'
    | 'gray'
    | 'orange'
    | 'orangeNew';
export interface TextProps {
    weight?:
        | 'extraBold'
        | 'bold'
        | 'semiBold'
        | 'regular'
        | 'medium'
        | 'light'
        | 'thin';
    children: any;
    size?: number;
    style?: TextStyle;
    center?: boolean;
    centerVertical?: boolean;
    color?: TextColor;
    numberOfLines?: number | null;
}

let {height} = Dimensions.get('window');

const Text = ({
    weight = 'regular',
    size = 16,
    children,
    style = {},
    center = false,
    color = 'text',
    centerVertical = false,
    numberOfLines = null,
}: TextProps) => {
    const {colors, fonts} = useTheme();

    return (
        <TextComp
            style={[
                // @ts-ignore
                fonts[weight],
                {
                    fontSize: RFValue(size, height),
                    includeFontPadding: false,
                },
                style,
                // {},
                // @ts-ignore
                {color: colors[color]},
                center && {textAlign: 'center'},
                centerVertical && {textAlignVertical: 'center'},
            ]}
            {...(numberOfLines ? {numberOfLines} : {})}>
            {children}
        </TextComp>
    );
};

export default Text;
