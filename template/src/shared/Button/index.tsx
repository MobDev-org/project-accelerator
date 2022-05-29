import * as React from 'react';
// import {View, StyleSheet} from 'react-native';
import {TouchableRipple, useTheme} from 'react-native-paper';
import {
    View,
    GestureResponderEvent,
    Pressable,
    StyleSheetProperties,
    TextStyle,
    ViewStyle,
    ActivityIndicator,
} from 'react-native';
import Text, {TextColor} from 'shared/Text';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ButtonProps {
    textColor?: TextColor;
    icon?: Element;
    label: string;
    onPress: (event: GestureResponderEvent) => void;
    style?: ViewStyle;
    loading?: boolean;
    disabled?: boolean;
}

const Button = ({
    label = '',
    onPress = () => {},
    icon,
    textColor = 'white',
    style = {},
    loading = false,
    disabled = false,
}: ButtonProps) => {
    return (
        <View style={style}>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={disabled ? () => {} : onPress}>
                <Text size={16} weight="medium" color={textColor}>
                    {label}
                </Text>
                <View style={styles.iconContainer}>
                    {loading ? (
                        <ActivityIndicator color={'#fff'} />
                    ) : !!icon ? (
                        icon
                    ) : null}
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Button;
