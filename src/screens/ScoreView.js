/* @flow */
import * as React from 'react';
import styled from 'styled-components/native';
import { Constants } from 'expo';

import { Headline } from '../components';

const Wrapper = styled.View`
  align-items: center;
  margin-top: 50px;
`;

const Text = styled.Text`
  font-sie: 20px;
`;

type Props = {
  score: string,
};

type State = {};

class ScoreView extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Score',
    tabBarVisible: false,
    headerStyle: {
      marginTop: -Constants.statusBarHeight,
    },
  };

  state = {};

  render() {
    return (
      <Wrapper>
        <Text>
          Your score:
        </Text>
        <Headline>{this.props.score}</Headline>
      </Wrapper>
    );
  }
}

export default ScoreView;
