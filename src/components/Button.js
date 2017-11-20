/* @flow */
import * as React from 'react';
import styled from 'styled-components/native';

import { Color } from '../utils';

const Wrapper = styled.TouchableOpacity`
  background-color: ${Color.BLACK};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
`;
const Text = styled.Text`
  color: ${Color.WHITE};
  font-size: 20px;
`;

type Props = {
  children: string,
  onPress: () => void,
};

const Button = ({ children, onPress }: Props) => {
  return (
    <Wrapper onPress={onPress}>
      <Text>
        {children}
      </Text>
    </Wrapper>
  );
};

export { Button };
