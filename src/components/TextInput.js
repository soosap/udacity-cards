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
};

type State = {
  text: ?string,
};

class TextInput extends React.Component<Props, State> {
  state = {
    text: '',
  };

  render() {
    return (
      <Wrapper
        onChangeText={text => this.setState({ text })}
        value={this.state.text}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export { TextInput };
