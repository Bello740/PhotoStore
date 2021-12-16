import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';

import {UploadScreen} from './src/screens';

export default function App() {
  return (
    <SafeAreaProvider>
      <FlashMessage position="top" duration={5000} />
      <UploadScreen />
    </SafeAreaProvider>
  );
}
