import * as Actions from './Constants';

export const sendMessage = (message) => {
  return {
    type: Actions.SEND_MESSAGE,
    message
  };
}

export const deleteMessage = (messageId) => {
  return {
    type: Actions.DELETE_MESSAGE,
    messageId
  };
}
