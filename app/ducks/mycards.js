const LOAD = 'mycards/LOAD';
const LOAD_SUCCESS = 'mycards/LOAD_SUCCESS';
const LOAD_FAIL = 'mycards/LOAD_FAIL';

const initialState = {
  loaded: false,
};

const baseAPIPath = 'http://browsekit.com';

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        cards: action.result,
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.myCards && globalState.myCards.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get(`${baseAPIPath}/myCards`),
  };
}
