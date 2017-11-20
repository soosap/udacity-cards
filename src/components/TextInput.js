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
};

const TextInput = ({ placeholder, value }: Props) => (
  <Wrapper
    value={value}
    placeholder={placeholder}
  />
);

export { TextInput };
