import React, {useState, useRef, useEffect, forwardRef} from 'react';
import {useTheme, TextInput} from 'react-native-paper';
import {Pressable, View} from 'react-native';
import Text from 'shared/Text';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {baseTheme} from 'shared/theme';

interface InputProps {
    label: string;
    value: string;
    placeholder: string;
    mode?: 'outlined' | 'contained' | 'text';
    keyboardType?: string;
    returnKeyType?: string;
    disabled?: boolean;
    error?: string;
    icon?: any;
    secure?: boolean;
    style?: any;
    focusOnLoad?: boolean;
    transparent?: boolean;
    onFocus?: Function;
    onBlur?: Function;
    onChangeText?: Function;
}

const Input = forwardRef(
    (
        {
            value = '',
            keyboardType = 'default',
            returnKeyType = 'done',
            disabled = false,
            error = '',
            icon = null,
            secure = false,
            style = {},
            focusOnLoad = false,
            transparent = false,

            ...props
        }: InputProps,
        ref,
    ) => {
        const {colors, customFonts} = useTheme();
        let [secureTextEntry, setSecureEntry] = useState(secure);

        return (
            <View style={style}>
                <View>
                    <TextInput
                        // ref={textInputRef}
                        // style={[styles.input]}
                        secureTextEntry={secureTextEntry}
                        error={!!error}
                        value={value}
                        {...props}
                        mode="outlined"
                        textAlignVertical="top"
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        outlineColor={baseTheme.colors.lightGray}
                    />
                    {secure && (
                        <Pressable
                            style={styles.secureIcon}
                            onPress={e => setSecureEntry(!secureTextEntry)}>
                            <Entypo
                                name={secureTextEntry ? 'eye' : 'eye-with-line'}
                                size={16}
                                color={error ? colors.error : colors.gray}
                            />
                        </Pressable>
                    )}
                </View>
                {!!error && (
                    <Text size={12} color={'error'} style={{marginTop: 4}}>
                        {error}
                    </Text>
                )}
            </View>
        );
    },
);

export default Input;
