import {Platform, StyleSheet} from 'react-native';
import {baseTheme} from 'shared/theme';

export default StyleSheet.create({
    container: {
        // height: 74,
        paddingHorizontal: 10,
        paddingVertical: 15,
        // paddingTop: 20,
        // paddingBottom: 15,
        // paddingVertical: 12,
        // justifyContent: 'center',
        // ...(Platform.OS === 'ios'
        //     ? {
        //           borderBottomWidth: 1,
        //           borderBottomColor: 'rgba(0,0,0,0.04)',
        //       }
        //     : {
        //           shadowColor: 'rgba(0,0,0,0.3)',
        //           shadowOffset: {
        //               width: 0,
        //               height: 0,
        //           },
        //           shadowOpacity: 1,
        //           elevation: 0.5,
        //       }),
        // shadowOpacity: 1,
        // elevation: 0.5,
        borderColor: baseTheme.colors.lightGray,
        borderRadius: 2,
        borderWidth: 1,
    },
});
