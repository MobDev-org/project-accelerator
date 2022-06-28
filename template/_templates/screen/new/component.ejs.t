---
to: src/screens/<%= location %>/<%= h.capitalize(name) %>/<%= h.capitalize(name) %>.component.tsx
---

import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {LocalizationContextProps} from 'translation/context';

interface Props {
  navigation?: any;
  route?: {
      params?: {};
  };
  t: LocalizationContextProps['t'];
}


const <%= h.capitalize(name) %> = (props: Props) => {
  const {t} = props;
  // const {colors, roundness} = useTheme();

  return (
    <View style={styles.container}>
    </View>
  );
};

export default <%= h.capitalize(name) %>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
