import React, { Component } from 'react';

class Directory extends Component {

  state = {
    dirFiles: [],
    expandFiles: false,
  }

  componentDidMount () {
    const { nameDirectory } = this.props;

    const dirFiles = this.getDirFiles(nameDirectory);

    this.setState({
      dirFiles,
    })
  }

  getDirFiles = (dir) => {
    const dirFiles = [];
    const { files } = this.props;

    files.forEach((file) => {
      if (file.directory === dir) {
        dirFiles.push(file);
      }
    });

    return dirFiles;
  }

  showFiles = () => {
    const { dirFiles } = this.state;
    const { clickFile } = this.props;

    return (
      <ul>
        {dirFiles.map((file) => {
          return(
            <li key={file.id} className="files-list">
              <button className="file-btn" onClick={() => {
                clickFile(file);
              }} ><span className="file-name">{file.title}</span></button>
            </li>
          )
        })}
      </ul>
    )
  }

  handleClickDir = () => {
    const { expandFiles } = this.state;

    if (!expandFiles) {
      this.setState({
        expandFiles: true,
      })
    } else {
      this.setState({
        expandFiles: false,
      })
    }
  }

  render() {
    const { nameDirectory } = this.props;
    const { expandFiles } = this.state;

    return (
      <div>
        <button onClick={this.handleClickDir} className="directory" ><h3><img src={require('../images/folder.png')} alt="dir" className="dir-img"/><span className="dir-name">{ nameDirectory }</span></h3></button>
        { expandFiles ? this.showFiles() : ''}
      </div>
    );
  }
}

export default Directory;