import * as React from 'react';
// import {View, StyleSheet} from 'react-native';
import {useTheme, Menu, Divider} from 'react-native-paper';
import {View, TouchableOpacity} from 'react-native';
import Text from 'shared/Text';
import styles from './styles';
import {ConstructionSite} from 'api/tabCoWebAPI.schemas';

interface CardProps {
    constructionSite: ConstructionSite;
    icon?: any;
    iconDescription?: any;
    bgColor?: 'lightGray' | 'white' | 'lightOrange';
    onPress?: Function;
}

const CardComp = ({
    constructionSite,
    icon,
    iconDescription,
    bgColor = 'white',
    onPress = () => {},
}: CardProps) => {
    const {colors, roundness} = useTheme();
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.container,
                {
                    borderRadius: roundness,

                    // backgroundColor: profile ? colors.white : colors[bgColor],
                    // borderWidth: profile ? 0 : 1,
                    // borderColor:
                    //     bgColor === 'lightOrange'
                    //         ? colors.lightOrangeBorder
                    //         : colors.lightGray,

                    backgroundColor: constructionSite.isActive
                        ? '#fff'
                        : '#70707019',
                    borderWidth: 1,
                    // borderColor: constructionSite.isActive
                    //     ? colors.lightOrangeBorder
                    //     : colors.lightGray,
                    borderColor: colors.lightGray,
                },
            ]}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                <Text weight="medium" size={16}>
                    {constructionSite.name}
                </Text>

                {constructionSite?.documents?.length > 0 && (
                    <View>
                        <Menu
                            visible={visible}
                            onDismiss={closeMenu}
                            style={{marginTop: 48}}
                            anchor={
                                <TouchableOpacity onPress={openMenu}>
                                    {!!icon ? icon : null}
                                </TouchableOpacity>
                            }>
                            {constructionSite?.documents?.map(
                                (document, index) => (
                                    <>
                                        <Menu.Item
                                            onPress={() => {}}
                                            title={document.name}
                                        />
                                        {index !==
                                            constructionSite.documents?.length -
                                                1 && <Divider />}
                                    </>
                                ),
                            )}
                        </Menu>
                    </View>
                )}
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                }}>
                {!!iconDescription ? iconDescription : null}

                <Text
                    style={{marginLeft: 8, includeFontPadding: false}}
                    weight="regular"
                    size={14}
                    color={'gray'}>
                    {constructionSite.address}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default CardComp;
