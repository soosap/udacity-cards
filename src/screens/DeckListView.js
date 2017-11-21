/* @flow */
import * as React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { Constants } from 'expo';

import * as actions from '../actions';

const Wrapper = styled.View``;
const Text = styled.Text``;

type Props = {};
type State = {};

class DeckListView extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Decks',
    headerStyle: {
      marginTop: -Constants.statusBarHeight,
    }
  };

  state = {};

  render() {
    return (
      <Wrapper>
        <Text>DeckListView</Text>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    decks: state.decks,
  };
};


export default connect(mapStateToProps, actions)(DeckListView);
