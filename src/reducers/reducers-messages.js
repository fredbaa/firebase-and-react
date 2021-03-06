import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case "fetch_messages":
      // console.log(action.payload.data);
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
