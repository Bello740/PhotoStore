import {BLACK_1} from '../styles/colors';

import React, {PropsWithChildren} from 'react';
import {Platform} from 'react-native';
import {ColorValue, Pressable, Text, TextProps, TextStyle} from 'react-native';

export type AxTextProps = PropsWithChildren<
  TextProps & {
    size?: number;
    weight?: 300 | 400 | 500 | 600 | 700 | 800;
    style?: TextStyle;
    centered?: boolean;
    color?: ColorValue;
    opacity?: number;
    pressable?: boolean;
    onPress?: () => void;
  }
>;

function AxText(props: AxTextProps) {
  const {
    children,
    onPress,
    size = Platform.select({ios: 16, android: 14}),
    weight = 500,
    style,
    opacity = 1,
    centered = false,
    pressable,
    color = BLACK_1,
    ...rest
  } = props;

  function _Text() {
    return (
      <Text
        {...rest}
        style={[
          style,
          {
            opacity,
            // letterSpacing: -0.3,
            // fontFamily: `NunitoSans ${weight}`,
            fontSize: size,
            textAlign: centered ? 'center' : 'auto',
            color,
          },
        ]}>
        {children}
      </Text>
    );
  }

  return pressable ? (
    <Pressable onPress={onPress}>
      <_Text />
    </Pressable>
  ) : (
    <_Text />
  );
}

export {AxText};
