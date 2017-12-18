import { FETCH_USER } from '../actions/type';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}

// the initial setup has an empty state and empty action object as parameters

// we are return the empty state with a default value because otherwise state would return "undefined"