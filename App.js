/* @flow */
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Constants } from 'expo';

import {
  DeckListView,
  NewDeckView,
  IndividualDeckView,
  NewQuestionView,
} from './src/screens';
import reducers from './src/reducers';

import { Color } from './src/utils';

const Tabs = TabNavigator({
  DeckListFlow: {
    screen: StackNavigator({
      DeckListView: {
        screen: DeckListView,
        navigationOptions: () => ({
          title: 'DECKS',
        }),
      },
      IndividualDeckView: {
        screen: IndividualDeckView,
        navigationOptions: ({ navigation }) => ({
          headerTitle: navigation.state.params.title,
        }),
      },
    }),
  },
  CreateDeckFlow: {
    screen: StackNavigator({
      NewDeckView: {
        screen: NewDeckView,
        navigationOptions: () => ({
          title: 'NEW DECK',
          header: null,
          headerBackTitle: null,
        }),
      },
      NewQuestionView: {
        screen: NewQuestionView,
        navigationOptions: () => ({
          title: 'Add Card',
          tabBarVisible: false,
        }),
      },
    }),
  },
});

const middleware = [reduxThunk];
const store = createStore(
  reducers,
  process.env.NODE_ENV === 'development'
    ? require('redux-devtools-extension').composeWithDevTools(
        applyMiddleware(...middleware),
        // other store enhancers if any
      )
    : applyMiddleware(...middleware),
);

type Props = {};
type State = {};

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <View style={{ height: Constants.statusBarHeight }}>
            <StatusBar
              translucent
              backgroundColor="blue"
            />
          </View>
          <Tabs />
        </View>
      </Provider>
    );
  }
}
