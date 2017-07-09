const LOAD = 'LOAD';
const LOAD_SUCCESS = 'LOAD_SUCCESS';
const LOAD_FAIL = 'LOAD_FAIL';

const initialState = {
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        cards: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.my_cards && globalState.my_cards.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/my_cards')
  };
}
