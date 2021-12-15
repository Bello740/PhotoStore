import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainFlow} from './main-flow';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainFlow />
    </NavigationContainer>
  );
};
