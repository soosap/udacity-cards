/* @flow */
import * as React from 'react';
import styled from 'styled-components/native';

import { Color } from '../utils';

const Wrapper = styled.TextInput`
  width: 300px;
  max-width: 90%;
  border: 1px solid ${Color.BLACK};
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 5px;
`;

type Props = {
  placeholder?: string,
  value?: string,
  onChangeText: () => void,
};

const TextInput = ({ placeholder, value, onChangeText }: Props) => (
  <Wrapper
    value={value}
    placeholder={placeholder}
    onChangeText={onChangeText}
  />
);

export { TextInput };
