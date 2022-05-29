import * as React from 'react';
// import {View, StyleSheet} from 'react-native';
import {useTheme, Menu, Divider} from 'react-native-paper';
import {View, TouchableOpacity} from 'react-native';
import Download from 'assets/Download';
import Text from 'shared/Text';
import styles from './styles';

interface DownloadCardProps {
    newItem?: boolean;
    deleteItem?: boolean;

    // iconDescription?: any;
    itemName?: string;
    date?: string;
    time?: string;
    // bgColor?: 'lightGray' | 'white' | 'lightOrange';
    // profile?: boolean;
}

const DownloadCardComp = ({
    newItem = false,
    deleteItem = false,
    itemName = '',
    date = '',
    time = '',
}: // icon,
// iconDescription,
// description = '',
// bgColor = 'white',
// profile = false,
DownloadCardProps) => {
    const {colors, fonts} = useTheme();

    return (
        <View
            style={{
                // height: 52,
                borderWidth: 1,
                borderRadius: 2,
                borderColor: newItem ? colors.lightOrange : colors.lightGray,
                paddingLeft: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
            <View style={{flex: 1}}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <View style={{paddingTop: 10}}>
                        <Text color={newItem ? 'orange' : 'black'}>
                            {itemName}
                        </Text>
                    </View>
                    {newItem ? (
                        <View
                            style={{
                                backgroundColor: colors.orange,
                                justifyContent: 'center',
                                marginRight: 6,
                                alignItems: 'center',
                                paddingHorizontal: 5,
                                marginTop: 6,
                                borderRadius: 1,
                            }}>
                            <Text size={12} weight="medium" color="white">
                                NEW
                            </Text>
                        </View>
                    ) : null}
                </View>
                <View>
                    <Text
                        size={12}
                        weight="regular"
                        color={newItem ? 'orangeNew' : 'gray'}
                        style={{paddingBottom: 6}}>
                        Uploadano: {date} u {time}
                    </Text>
                </View>
            </View>
            {deleteItem ? (
                <View
                    style={{
                        // backgroundColor: colors.orange,
                        justifyContent: 'center',
                        marginRight: 6,
                        alignItems: 'center',
                        paddingHorizontal: 5,
                        // marginTop: 6,
                        borderRadius: 1,
                    }}>
                    <Download />
                </View>
            ) : null}
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: colors.lightOrangeBorder,
                    width: 40,
                    // height: 52,
                }}>
                <Download />
            </View>
        </View>
    );
};

export default DownloadCardComp;
