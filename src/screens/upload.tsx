import React, {useCallback, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  launchImageLibrary,
  ImageLibraryOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';
import {Header, ButtonText, Button, Spacer, AxText} from '../components';
import {GREY_1, GREY_2, GREY_3, WHITE} from '../styles/colors';
import {metrics} from '../theme/metrics';

export function UploadScreen() {
  const [pickerResponse, setPickerResponse] = useState<ImagePickerResponse>();

  const onPressLaunchImageLibrary = async () => {
    const options: ImageLibraryOptions = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    const result = await launchImageLibrary(options);
    setPickerResponse(result);
  };

  let uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Upload " />
      <Spacer y={5} />
      <View style={styles.body}>
        <TouchableOpacity
          onPress={onPressLaunchImageLibrary}
          activeOpacity={0.7}
          style={styles.ImageSection}>
          {!pickerResponse ? (
            <AxText color={GREY_1}>Choose file here..</AxText>
          ) : (
            <Image
              resizeMode="cover"
              style={{width: '100%', height: '100%'}}
              source={{uri}}
            />
          )}
        </TouchableOpacity>
        {!pickerResponse ? null : (
          <View style={styles.buttonSection}>
            <Spacer y={20} />
            <Button>
              <ButtonText>Apply edit</ButtonText>
            </Button>
          </View>
        )}
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
    flex: 1,
    padding: metrics.defaultPadding,
  },
  ImageSection: {
    flex: 1,
    backgroundColor: GREY_2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    borderColor: GREY_3,
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  buttonSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
