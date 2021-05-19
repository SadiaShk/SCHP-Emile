import {REHYDRATE} from 'redux-persist';

import actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  general_data: [],
  loading: false,
  loadingKey: null,
};

export default GeneralReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REHYDRATE: {
      return state;
    }
    case actionTypes.loaderOn: {
      return {
        ...state,
        loading: true,
      };
    }
    case actionTypes.loaderOff: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
};
