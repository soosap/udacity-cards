/* @flow */
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { TabNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import { DeckListView, NewDeckView } from './src/screens';
import reducers from './src/reducers';

const Tabs = TabNavigator({
  DeckListView: {
    screen: DeckListView,
    navigationOptions: () => ({
      title: 'DECKS',
    }),
  },
  NewDeckView: {
    screen: NewDeckView,
    navigationOptions: () => ({
      title: 'NEW DECK',
    }),
  },
});

const middleware = [reduxThunk];
const store = createStore(reducers, applyMiddleware(...middleware));

type Props = {};
type State = {};

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <View>
          <StatusBar barStyle="light-content" />
          <Tabs />
        </View>
      </Provider>
    );
  }
}
