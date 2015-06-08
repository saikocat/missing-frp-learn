import React from 'react';
import FollowUsersSuggestion from 'widget/FollowUsersSuggestion.jsx!';
import FollowUsersSuggestionStore from 'app/store/FollowUsersSuggestionStore';
import FollowUsersSuggestionAction from 'app/action/FollowUsersSuggestionAction';
import {listUsersSince} from 'app/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };

    this.onRefreshSuggestion = this.onRefreshSuggestion.bind(this);
    this.onRefreshSuggestionError = this.onRefreshSuggestionError.bind(this);
  }

  componentDidMount() {
    FollowUsersSuggestionStore.usersStream.onValue(this.onRefreshSuggestion);
    FollowUsersSuggestionStore.usersStream.onError(this.onRefreshSuggestionError);

    this.refreshSuggestion();
  }

  componentWillUnmount() {
    FollowUsersSuggestionStore.usersStream.offValue(this.onRefreshSuggestion);
    FollowUsersSuggestionStore.usersStream.offError(this.onRefreshSuggestionError);
  }

  onRefreshSuggestion(data) {
    this.setState({ users: data.users });
  }

  onRefreshSuggestionError(error) {
    console.log(error);
  }

  refreshSuggestion() {
    FollowUsersSuggestionAction.refresh();
  }

  render() {
    return (
      <div>
        <div>
            <h2>Who to follow on GitHub</h2>
            <button onClick={this.refreshSuggestion}>Refresh</button>
        </div>
        <FollowUsersSuggestion users={this.state.users} />
      </div>
    )
  }
}

var run = function() {
    React.render(<App />, document.getElementById('app'));
}

export { run };
