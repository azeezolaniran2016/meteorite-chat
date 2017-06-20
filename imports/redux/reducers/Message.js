import * as actionTypes from '../actions/Constants';
import { Messages } from '../../../api/db';

export default (state = {}, action) => {
  switch(action.type) {
    case actionTypes.SEND_MESSAGE: {
      Messages.insert(action.message);
      return state;
    }
    default:
      return state;
  }
}