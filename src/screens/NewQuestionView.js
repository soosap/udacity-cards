/* @flow */
import * as React from 'react';
import styled from 'styled-components/native';
import { Constants } from 'expo';
import { connect } from 'react-redux';

import { TextInput, Button } from '../components';
import * as actions from '../actions';
import type { Question } from '../utils/types';

const Wrapper = styled.View`
  align-items: center;
  margin-top: 50px;
`;

type NavigationState = {
  params: {
    title: string,
  },
};

type Props = {
  addCardToDeck: (title: string, card: Question) => void,
  navigation: NavigationScreenProp<NavigationState>,
};

type State = {
  question: string,
  answer: string,
};

class NewQuestionView extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Add card',
    tabBarVisible: false,
    headerStyle: {
      marginTop: -Constants.statusBarHeight,
    },
  };

  state = {
    question: '',
    answer: '',
  };

  handleSubmit = () => {
    this.props.addCardToDeck(this.props.navigation.state.params.title, {
      question: this.state.question,
      answer: this.state.answer,
    });

    this.setState({
      question: '',
      answer: '',
    });
  };

  render() {
    return (
      <Wrapper>
        <TextInput
          value={this.state.question}
          onChangeText={question => this.setState({ question })}
          placeholder="Q: i.e. What is a component?"
          style={{ marginBottom: 30 }}
        />
        <TextInput
          value={this.state.answer}
          onChangeText={answer => this.setState({ answer })}
          placeholder="A: i.e. Components let you split the UI into independent reusable pieces."
          style={{ marginBottom: 50 }}
        />
        <Button onPress={this.handleSubmit}>Submit</Button>
      </Wrapper>
    );
  }
}

export default connect(null, actions)(NewQuestionView);
