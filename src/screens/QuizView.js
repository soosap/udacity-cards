/* @flow */
import * as React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View``;
const Text = styled.Text``;

type Props = {};
type State = {};

class QuizView extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <Wrapper>
        <Text>QuizView</Text>
      </Wrapper>
    );
  }
}

export default QuizView;
