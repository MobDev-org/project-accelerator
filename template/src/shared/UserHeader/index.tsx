import * as React from 'react';
// import {View, StyleSheet} from 'react-native';
import {useTheme, Menu, Divider} from 'react-native-paper';
import {View, TouchableOpacity} from 'react-native';
import Text from 'shared/Text';
import styles from './styles';
import {useAppSelector} from 'store/hooks';
import {shadows} from 'helpers/sharedStyles';
import LogOut from 'assets/LogOut';
import Person from 'assets/Person';
import {useDispatch} from 'react-redux';
import {UserRole} from 'store/user/slice';

const UserHeader = () => {
    let {user} = useAppSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <TouchableOpacity
            onPress={() => dispatch({type: 'RESET'})}
            style={[styles.container, shadows.shadow8]}>
            <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text weight="medium" size={16}>
                    {user?.email}
                </Text>

                <LogOut />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                }}>
                <Person />

                <Text
                    style={{marginLeft: 8, includeFontPadding: false}}
                    weight="regular"
                    size={14}
                    color={'gray'}>
                    {user?.userRole === UserRole.Engineer
                        ? 'Inžinjer'
                        : 'Investitor'}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default UserHeader;
