import React from 'react';

export default class User extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.info.avatar_url} alt={this.props.info.login} />
        <a href={this.props.info.html_url}>{this.props.info.login}</a>
      </div>
    );
  }
}
