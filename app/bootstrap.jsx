import React from 'react';
import FollowUsersSuggestion from 'widget/FollowUsersSuggestion.jsx!';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Who to follow on GitHub</h1>
        <FollowUsersSuggestion lastUserId={this.props.lastUserId} />
      </div>
    )
  }
}

var bootstrap = function(lastUserId) {
    React.render(<App lastUserId={lastUserId} />, document.getElementById('app'))
}

export { bootstrap };
