import React from 'react';
import User from 'widget/User.jsx!';

export default class FollowUsersSuggestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var usersInfo = this.props.users.map((user) =>
        <li key={user.login}>
            <User info={user} />
        </li>);
    return <ul>{usersInfo}</ul>;
  }
}
