import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import {Header} from '../components';
import {WHITE} from '../styles/colors';
import {metrics} from '../theme/metrics';

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home " />
      <View style={styles.body}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  body: {
    padding: metrics.defaultPadding,
  },
});
