/* @flow */
export type Deck = {
  title: string,
};

type FetchDecksAction = {
  type: 'FETCH_DECKS',
  payload: Array<Deck>,
};

export type Action = FetchDecksAction;

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
// type GetState = () => State;
type GetState = () => Object;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type PromiseAction = Promise<Action>;
