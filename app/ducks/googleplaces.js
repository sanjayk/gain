const PLACES_LOAD = 'googleplaces/LOAD';
const PLACES_LOAD_SUCCESS = 'googleplaces/LOAD_SUCCESS';
const PLACES_LOAD_FAIL = 'googleplaces/LOAD_FAIL';

import Qs from 'qs';

const initialState = {
  loaded: false,
};

const googlePlacesAPIKey = 'AIzaSyDQeAedSZv5gBmRv6ajtENr68PrFChuIEo';
const googlePlaceBaseAPIPath = 'https://maps.googleapis.com/maps/api';
const googlePlaceNearbyAPIPath = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case PLACES_LOAD:
      return {
        ...state,
        loading: true,
      };
    case PLACES_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        gData: action.result,
      };
    case PLACES_LOAD_FAIL:
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
  return globalState.gData && globalState.loaded;
}

export function getCurrentLocationInfo(location) {
  const query = `?${Qs.stringify({
    location: `${location.position.latitude}, ${location.position.longitude}`,
    key: `${googlePlacesAPIKey}`,
    rankby: 'distance',
    types: 'establishment',
  })}`;

  return {
    types: [PLACES_LOAD, PLACES_LOAD_SUCCESS, PLACES_LOAD_FAIL],
    promise: client => client.get(googlePlaceNearbyAPIPath + query),
  };
}

// export function getCurrentLocationInfo(platform, enableHighAccuracyLocation) {
//   let options = null;
//   if (enableHighAccuracyLocation) {
//     options = (platform === 'android') ? {
//       enableHighAccuracy: true,
//       timeout: 20000,
//     } : {
//       enableHighAccuracy: true,
//       timeout: 20000,
//       maximumAge: 1000,
//     };
//   }
//
//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       _requestNearby(position.coords.latitude, position.coords.longitude);
//     },
//     (error) => {
//       // alert(error.message);
//       console.log(error);
//     },
//     options,
//   );
// }
