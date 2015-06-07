import React from 'react';
import {listUsersSince} from 'app/api';
import User from 'widget/User.jsx!';

export default class FollowUsersSuggestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    listUsersSince(this.props.lastUserId).then((users) => {
      this.setState({ users });
    });
  }

  render() {
    var usersInfo = this.state.users.map((user) =>
        <li key={user.login}>
            <User info={user} />
        </li>);
    return <ul>{usersInfo}</ul>;
  }
}
