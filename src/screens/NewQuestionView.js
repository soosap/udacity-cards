/* @flow */
import * as React from 'react';
import styled from 'styled-components/native';
import { Constants } from 'expo';

const Wrapper = styled.View``;
const Text = styled.Text``;

type Props = {};
type State = {};

class NewQuestionView extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Add card',
    tabBarVisible: false,
    headerStyle: {
      marginTop: -Constants.statusBarHeight,
    },
  };

  state = {};

  render() {
    return (
      <Wrapper>
        <Text>NewQuestionView</Text>
      </Wrapper>
    );
  }
}

export default NewQuestionView;
