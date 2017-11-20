/* @flow */
import * as React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View``;
const Text = styled.Text``;

type Props = {};
type State = {};

class NewQuestionView extends React.Component<Props, State> {
  state = {};

  render() {
    <Wrapper>
      <Text>NewQuestionView</Text>
    </Wrapper>
  }
}

export { NewQuestionView };
