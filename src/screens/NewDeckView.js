/* @flow */
import * as React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import { TextInput, Button } from '../components';
import * as actions from '../actions';

const Wrapper = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const ButtonWrapper = styled.View`
  margin: 10px;
  margin-top: 30px;
`;

const Text = styled.Text`
  font-size: 48px;
  text-align: center;
  margin-bottom: 24px;
`;

type Props = {
  saveDeckTitle: (title: string) => void,
};
type State = {
  title: string,
};

class NewDeckView extends React.Component<Props, State> {
  state = {
    title: '',
  };

  handleSubmit = () => {
    this.props.saveDeckTitle(this.state.title);
  };

  render() {
    return (
      <Wrapper behavior="padding">
        <Text>What is the title of your new deck?</Text>
        <TextInput
          placeholder="Deck Title"
          onTextChange={text => this.setState({ title: text })}
        />
        <ButtonWrapper>
          <Button onPress={this.handleSubmit}>Submit</Button>
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

export default connect(null, actions)(NewDeckView);
