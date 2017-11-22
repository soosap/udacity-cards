/* @flow */
import * as React from 'react';
import styled from 'styled-components/native';
import { Constants } from 'expo';
import { connect } from 'react-redux';

import { Color } from '../utils';
import { Link, Button, Headline } from '../components';
import type { Deck } from '../utils/types';

const Wrapper = styled.View`
  align-items: center;
  margin-top: 40px;
`;

type NavigationState = {
  params: {
    title: string,
  },
};

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
  deck: Deck,
};

type State = {
  answerRevealed: boolean,
  activeQuestionIndex: number,
  correctAnswers: number,
};

class QuizView extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Quiz',
    tabBarVisible: false,
    headerStyle: {
      marginTop: -Constants.statusBarHeight,
    },
  };

  state = {
    answerRevealed: false,
    activeQuestionIndex: 0,
    correctAnswers: 0,
  };

  toggleAnswerQuestionLink = () => {
    this.setState(state => ({
      answerRevealed: !state.answerRevealed,
    }));
  };

  handleAnswer = (answer: boolean) => {
    console.log('handling answer', answer);
  };

  render() {
    const card = this.props.deck.questions[this.state.activeQuestionIndex];
    return (
      <Wrapper>
        <Headline>
          {this.state.answerRevealed ? card.answer : card.question}
        </Headline>
        <Link onPress={this.toggleAnswerQuestionLink}>
          {this.state.answerRevealed ? 'Question' : 'Answer'}
        </Link>
        <Button
          style={{ width: 125, marginBottom: 10 }}
          textStyle={{ textAlign: 'center' }}
          onPress={() => this.handleAnswer(true)}
          context="success"
        >
          Correct
        </Button>
        <Button
          style={{ width: 125 }}
          textStyle={{ textAlign: 'center' }}
          onPress={() => this.handleAnswer(false)}
          context="danger"
        >
          Incorrect
        </Button>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { deck: state.decks[props.navigation.state.params.title] };
};

export default connect(mapStateToProps)(QuizView);
