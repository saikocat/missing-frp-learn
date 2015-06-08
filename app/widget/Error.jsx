import React from 'react';

export default class Error extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p className='message-error'>{this.props.error}</p>;
  }
}
