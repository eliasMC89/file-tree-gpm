import React, { Component } from 'react';

class File extends Component {

  render() {
    const { file } = this.props;

    return (
      <div>
        <h2>{file.title}</h2>
        <p>{file.content}</p>
      </div>
    );
  }
}

export default File;