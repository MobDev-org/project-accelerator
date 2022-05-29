import * as React from 'react';
// import {View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'assets/HeaderLogo';
import Text from 'shared/Text';
import styles from './styles';

interface HeaderProps {}

const HeaderComp = ({}: // textColor = '',

HeaderProps) => {
    const {colors, fonts} = useTheme();

    return (
        <View style={{paddingVertical: 20, alignItems: 'center'}}>
            <Icon />
        </View>
    );
};

export default HeaderComp;
