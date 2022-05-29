import * as React from 'react';
// import {View, StyleSheet} from 'react-native';
import {useTheme, Menu, Divider} from 'react-native-paper';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'assets/Upload';
import Text from 'shared/Text';
import styles from './styles';

interface UploadCardProps {
    // icon?: any;
    // iconDescription?: any;
    // description?: string;
    // bgColor?: 'lightGray' | 'white' | 'lightOrange';
    // profile?: boolean;
}

const UploadCardComp = ({}: // icon,
// iconDescription,
// description = '',
// bgColor = 'white',
// profile = false,
UploadCardProps) => {
    const {colors, fonts} = useTheme();

    return (
        <View
            style={{
                borderRadius: 2,
                // height: 80,
                borderWidth: 1,
                borderColor: colors.lightGray,
                borderStyle: 'dashed',
                padding: 16,
                flexDirection: 'row',
            }}>
            <View>
                <Icon />
            </View>
            <View>
                <View>
                    <Text size={16} weight="medium">
                        Klikni ovdje za ubacivanje privitka
                    </Text>
                </View>
                <View>
                    <Text size={14} weight="regular" color="gray">
                        pdf, docx, txt fajlovi, max filesize 3MB.
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default UploadCardComp;
