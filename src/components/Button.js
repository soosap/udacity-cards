/* @flow */
import * as React from 'react';
import styled from 'styled-components/native';

import { Color } from '../utils';

const Wrapper = styled.TouchableOpacity`
  background-color: ${props => props.inverted ? 'transparent' : Color.BLACK};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  border-width: ${props => props.inverted ? '1px' : '0'};
  border-color: ${Color.BLACK};
`;
const Text = styled.Text`
  color: ${props => props.inverted ? Color.BLACK : Color.WHITE};
  font-size: 20px;
`;

type Props = {
  children: string,
  onPress?: () => void,
  inverted: boolean,
};

const Button = ({ children, onPress, inverted }: Props) => {
  return (
    <Wrapper inverted={inverted} onPress={onPress}>
      <Text inverted={inverted}>{children}</Text>
    </Wrapper>
  );
};

Button.defaultProps = {
  inverted: false,
};

export { Button };
