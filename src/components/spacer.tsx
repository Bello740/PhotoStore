import React from 'react';
import {View} from 'react-native';

type SpacerProps = {
  x?: number;
  y?: number;
};

export function Spacer({x, y}: SpacerProps) {
  return <View style={{width: x, height: y}} />;
}
