import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {Header, ButtonText, Button, Spacer, AxText} from '../components';
import {GREY_1, GREY_2, GREY_3, WHITE} from '../styles/colors';
import {metrics} from '../theme/metrics';

export function UploadScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Upload " />
      <View style={styles.body}>
        <Spacer y={15} />

        <TouchableOpacity activeOpacity={0.7} style={styles.ImageSection}>
          <AxText color={GREY_1}>Choose file here..</AxText>
        </TouchableOpacity>
        <Spacer y={30} />
        <View style={styles.buttonSection}>
          <Button>
            <ButtonText> Done</ButtonText>
          </Button>
        </View>
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
  ImageSection: {
    backgroundColor: GREY_2,
    padding: metrics.defaultPadding,
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    borderRadius: 2,
    borderColor: GREY_3,
    borderWidth: 5,
    borderStyle: 'dashed',
  },
  buttonSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
