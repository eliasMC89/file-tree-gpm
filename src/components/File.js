import React, { Component } from 'react';

class File extends Component {

  render() {
    const { file, closePreview } = this.props;

    return (
      <div>
        <div>
          <button onClick={closePreview} >Close</button>
        </div>
        <div>
          <h2>{file.title}</h2>
          <p>{file.content}</p>
        </div>
      </div>
    );
  }
}

export default File;