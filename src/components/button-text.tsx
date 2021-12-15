import React from 'react';

import {AxText, AxTextProps} from './text';
import {BLACK_1} from '../styles/colors';

export function ButtonText({
  children,
  color = BLACK_1,
  weight = 100,
  ...rest
}: AxTextProps) {
  return (
    <AxText color={color} weight={weight} {...rest}>
      {children}
    </AxText>
  );
}
