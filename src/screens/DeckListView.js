/* @flow */
import * as React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { Constants } from 'expo';

import * as actions from '../actions';
import { Card } from '../components';
import type { Deck } from '../utils/types';

const Wrapper = styled.View``;
const Text = styled.Text``;

type Props = {
  decks: { [key: $PropertyType<Deck, 'title'>]: Deck },
  fetchDecks: () => void,
};

type State = {};

class DeckListView extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Decks',
    headerStyle: {
      marginTop: -Constants.statusBarHeight,
    },
  };

  componentDidMount() {
    this.props.fetchDecks();
  }

  state = {};

  render() {
    console.log('this.props.decks', this.props.decks);
    return (
      <Wrapper>
        {Object.keys(this.props.decks).map(key => (
          <Card key={key} {...this.props.decks[key]} />
        ))}
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
