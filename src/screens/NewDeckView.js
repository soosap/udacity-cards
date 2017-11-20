/* @flow */
import * as React from 'react';
import styled from 'styled-components/native';

import { TextInput, Button } from '../components';

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

type Props = {};
type State = {
  title: string,
};

class NewDeckView extends React.Component<Props, State> {
  state = {
    title: '',
  };

  handleSubmit = () => {
    console.log('submitting...', this.state.title);
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

export default NewDeckView;
