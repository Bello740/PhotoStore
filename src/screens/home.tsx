import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import {AxText, Header} from '../components';
import {WHITE, GREY_1} from '../styles/colors';
import {metrics} from '../theme/metrics';

export function HomeScreen() {
  function EmptyList() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <AxText color={GREY_1}>No photo upload</AxText>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home " />
      <View style={styles.body}>
        <EmptyList />
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
    flex: 1,
  },
});
