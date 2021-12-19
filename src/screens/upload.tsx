import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';

import {
  launchImageLibrary,
  ImageLibraryOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';
import {backend} from '../apis/backend';

import {Header, ButtonText, Button, Spacer, AxText} from '../components';
import {API_URL} from '../config';
import {uploadImage, CustomFlashMessage} from '../helpers';
import {GREY_1, GREY_2, WHITE} from '../styles/colors';
import {metrics} from '../theme/metrics';

export function UploadScreen() {
  const [pickerResponse, setPickerResponse] = useState<ImagePickerResponse>();
  const [imageUri, setImageUri] = useState<string | undefined>();
  const [imageFramed, setImageFramed] = useState<boolean>(false);
  let imgFile = pickerResponse?.assets && pickerResponse.assets[0];
  let mimetype = imgFile?.type;
  let fileName = imgFile?.fileName;

  useEffect(() => {
    console.log(imgFile);
    if (imgFile) {
      setImageUri(imgFile?.uri && imgFile.uri);
      onUploadPress();
    }
  }, [pickerResponse]);

  useEffect(() => {
    console.log('this', imageUri);
  }, [imageUri]);

  const onPressLaunchImageLibrary = async () => {
    const options: ImageLibraryOptions = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    const result = await launchImageLibrary(options);
    if (result) {
      setPickerResponse(result);
    }
  };

  const onUploadPress = async () => {
    try {
      let imgUri = imgFile?.uri && imgFile.uri;
      if (imgUri) {
        imgUri = Platform.OS === 'ios' ? imgUri.replace('file://', '') : imgUri;
      }
      const formData = new FormData();
      formData.append('file', {
        name: fileName,
        uri: imgUri,
        type: mimetype,
      });
      await uploadImage(formData);
    } catch ({message, status}) {
      CustomFlashMessage.error(message as string);
    }
  };

  const onButtonFramePress = async () => {
    const data = (
      await backend.get('/file', {
        params: {action: 'composite', filename: `${fileName}`},
      })
    ).data;
    console.log('my data', data);
    setImageFramed(true);
    setImageUri(undefined);
    setImageUri(`${API_URL}/file/${data.name}`);
  };

  const onButtonLeftPress = async () => {
    const data = (
      await backend.get('/file', {
        params: {
          action: 'rotate',
          direction: 'left',
          filename: `${fileName}`,
        },
      })
    ).data;
    console.log('my data', data);
    setImageUri(undefined);
    setImageUri(`${API_URL}/file/${data.name}`);
  };

  const onButtonRightPress = async () => {
    const data = (
      await backend.get('/file', {
        params: {
          action: 'rotate',
          direction: 'right',
          filename: `${fileName}`,
        },
      })
    ).data;
    console.log('my data', data);
    setImageUri(undefined);
    setImageUri(`${API_URL}/file/${data.name}`);
  };

  const onDonePress = () => {
    setImageFramed(false);
    setPickerResponse(undefined);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="PhotoShop" />
      <View style={styles.body}>
        {!pickerResponse?.assets ? (
          <TouchableOpacity
            onPress={onPressLaunchImageLibrary}
            activeOpacity={0.7}
            style={styles.ImageSection}>
            <AxText color={GREY_1}>Tap the sceen to choose files ...</AxText>
          </TouchableOpacity>
        ) : (
          <View style={{flex: 1}}>
            <View style={[styles.ImageSection]}>
              <Image
                resizeMode="contain"
                style={{
                  width: '100%',
                  height: '100%',
                }}
                source={{
                  uri: imageUri,
                }}
              />
            </View>

            <View style={{paddingHorizontal: metrics.defaultPadding}}>
              <Spacer y={20} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                {!imageFramed ? (
                  <Button
                    onPress={onButtonFramePress}
                    style={styles.button}
                    rounded>
                    <ButtonText>Frame</ButtonText>
                  </Button>
                ) : (
                  <Button onPress={onDonePress} style={styles.button} rounded>
                    <ButtonText>Done</ButtonText>
                  </Button>
                )}

                <Button
                  onPress={onButtonLeftPress}
                  style={styles.button}
                  rounded>
                  <ButtonText>Left</ButtonText>
                </Button>
                <Button
                  onPress={onButtonRightPress}
                  style={styles.button}
                  rounded>
                  <ButtonText>Right</ButtonText>
                </Button>
              </View>
            </View>
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
  },
  ImageSection: {
    flex: 1,
    backgroundColor: GREY_2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: metrics.defaultPadding,
  },
  button: {width: '30%'},
});
