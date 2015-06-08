import AppDispatcher from 'app/AppDispatcher';
import FollowUsersSuggestionConstant from 'app/constant/FollowUsersSuggestionConstant';
import Kefir from 'kefir';

export default {
  refresh: function() {
    let stream = Kefir.stream(emitter => {
      emitter.emit({
        actionType: FollowUsersSuggestionConstant.FOLLOWUSERSSUGGESTION_REFRESH
      });
      emitter.end();
    });
    AppDispatcher.plug(stream);
  },

  removeSuggestion: function(id) {
    let stream = Kefir.stream(emitter => {
      emitter.emit({
        actionType: FollowUsersSuggestionConstant.FOLLOWUSERSSUGGESTION_REMOVE_SUGGESTION,
        id: id
      });
      emitter.end();
    });
    AppDispatcher.plug(stream);
  }
};
