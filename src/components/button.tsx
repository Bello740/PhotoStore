import React from 'react';
import {
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
  ColorValue,
  ActivityIndicator,
} from 'react-native';
import {GREY_2, PRIMARY_COLOR, WHITE} from '../styles/colors';
import {AxText} from './text';
import {PropsWithChildren} from 'react';

type ButtonProps = PropsWithChildren<{
  onPress?: () => void;
  loading?: boolean;
  rounded?: boolean;
  style?: ViewStyle;
  bg?: ColorValue;
}>;

export function Button({
  loading = false,
  rounded = false,
  bg = WHITE,
  style,
  onPress,
  children,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={loading ? undefined : onPress}
      disabled={loading}
      style={[
        styles.container,
        style,
        {
          borderWidth: 2,
          borderColor: GREY_2,
          backgroundColor: bg,
          borderRadius: rounded ? 100 : 2,
        },
      ]}>
      {loading ? (
        <ActivityIndicator color={WHITE} size="small" />
      ) : (
        <AxText style={styles.text}>{children}</AxText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: PRIMARY_COLOR,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
