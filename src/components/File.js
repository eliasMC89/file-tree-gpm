import React, { Component } from 'react';

class File extends Component {

  render() {
    const { file, closePreview } = this.props;

    return (
      <div>
        <div>
          <button className="close-file-btn" onClick={closePreview} >Close</button>
        </div>
        <div className="file" >
          <h2 className="file-title" >{file.title}</h2>
          <p className="file-text" >{file.content}</p>
        </div>
      </div>
    );
  }
}

export default File;