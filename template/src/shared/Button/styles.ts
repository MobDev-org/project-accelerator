import {StyleSheet} from 'react-native';
import {baseTheme} from 'shared/theme';

export default StyleSheet.create({
    button: {
        backgroundColor: baseTheme.colors.orange,
        borderRadius: baseTheme.roundness,
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconContainer: {
        position: 'absolute',
        right: 20,
    },
});
