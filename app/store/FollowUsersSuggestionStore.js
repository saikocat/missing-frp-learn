import Kefir from 'kefir';
import { listUsersSince } from 'app/api';
import AppDispatcher from 'app/AppDispatcher';
import FollowUsersSuggestionConstant from 'app/constant/FollowUsersSuggestionConstant';

var refreshActionStream = AppDispatcher
  .filter(action => action.actionType == FollowUsersSuggestionConstant.FOLLOWUSERSSUGGESTION_REFRESH);

var marshaller = data => {
  return {
    users: data
  }
}

var refreshResult = refreshActionStream.flatMapLatest(action => {
  var randomOffset = Math.floor(Math.random() * 500);
  return Kefir.fromPromise(listUsersSince(randomOffset));
});

var followUsersSuggestionStream = Kefir
  .merge([
    refreshResult.map(data => data.slice(0, 3)).map(marshaller)
  ]);

export default {
  usersStream: followUsersSuggestionStream
}
