/* @flow */
import type { Deck, Action } from '../utils/types';

type State = ?Array<Deck>;

export default function(state: State = [], action: Action) {
  switch (action.type) {
    case 'FETCH_DECKS':
      return action.payload;
    default:
      return state;
  }
}
