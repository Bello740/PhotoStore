import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {BLACK_1, PRIMARY_COLOR, WHITE} from '../styles/colors';
import {HomeScreen, UploadScreen} from '../screens';

export type MainFlowParamList = {
  Home: undefined;
  Upload: undefined;
};

const BottomTab = createMaterialBottomTabNavigator<MainFlowParamList>();

export const MainFlow = () => {
  return (
    <BottomTab.Navigator
      activeColor={PRIMARY_COLOR}
      inactiveColor={BLACK_1}
      barStyle={{backgroundColor: WHITE}}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <BottomTab.Screen
        name="Upload"
        component={UploadScreen}
        options={{
          tabBarLabel: 'Upload',
        }}
      />
    </BottomTab.Navigator>
  );
};
