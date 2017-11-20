/* @flow */
import type { Dispatch } from '../utils/types';

export const fetchDecks = () => async (dispatch: Dispatch) => {
  // AsyncStorage get...

  dispatch({
    type: 'FETCH_DECKS',
    // payload: asyncResponse.data,
  });
};
