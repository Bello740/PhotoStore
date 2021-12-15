import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {GREY_3, PRIMARY_COLOR} from '../styles/colors';
import {metrics} from '../theme/metrics';

type HeaderProps = {
  title: string;
};

export function Header({title}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: metrics.defaultPadding,
    borderBottomColor: GREY_3,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 23,
    fontWeight: '500',
    color: PRIMARY_COLOR,
  },
});
