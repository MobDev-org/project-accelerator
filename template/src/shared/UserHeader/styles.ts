import {Platform, StyleSheet} from 'react-native';
import {baseTheme} from 'shared/theme';

export default StyleSheet.create({
    container: {
        padding: 16,
        paddingTop: 20,
        borderColor: baseTheme.colors.lightGray,
        borderRadius: baseTheme.roundness,
    },
});
