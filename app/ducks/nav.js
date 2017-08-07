import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigation/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const secondAction = AppNavigator.router.getActionForPathAndParams('Location');
const tempNavState = AppNavigator.router.getStateForAction(secondAction);
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction,
  tempNavState,
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Home':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state,
      );
      break;
    case 'Location':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Location' }),
        state,
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export default nav;
