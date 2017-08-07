const SET_LOCATION = 'location/SET_LOCATION';
const SET_LOCATION_ERROR = 'location/SET_LOCATION_ERROR';

const initialState = {
  position: {},
  enabled: undefined,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'location/SET_LOCATION' :
      return {
        ...state,
        position: action.position,
        enabled: true,
      };
    case 'location/SET_LOCATION_ERROR' :
      return {
        ...state,
        enabled: false,
      };
    default :
      return state;
  }
}

function setLocation(position) {
  return {
    type: SET_LOCATION,
    position,
  };
}

function setLocationError(error) {
  return {
    type: SET_LOCATION_ERROR,
    error,
  };
}

export function getAndSetCurrentLocation() {
  return function (dispatch) {
    return navigator.geolocation.getCurrentPosition(
      ({ coords }) => dispatch(setLocation(coords)),
      ({ message }) => dispatch(setLocationError(message)),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  };
}
