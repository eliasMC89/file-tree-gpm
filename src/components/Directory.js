import React, { Component } from 'react';
import { files } from '../data/files';

class Directory extends Component {

  state = {
    dirFiles: [],
    expandFiles: false,
  }

  componentDidMount () {

    const dirFiles = this.getFiles(this.props.numDirectory);

    this.setState({
      dirFiles,
    })
  }

  getFiles = (dir) => {
    const dirFiles = [];

    files.forEach((file) => {
      if (file.directory === dir) {
        dirFiles.push(file);
      }
    })

    return dirFiles;
  }

  showFiles = () => {
    const { dirFiles } = this.state;
    const { clickFile } = this.props;

    return (
      <ul>
        {dirFiles.map((file) => {
          return(
            <li key={file.title} >
              <button onClick={() => {
                clickFile(file);
              }} ><p>{file.title}</p></button>
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
    const { numDirectory } = this.props;
    const { expandFiles } = this.state;

    return (
      <div>
        <button onClick={this.handleClickDir} ><h3>Directory { numDirectory }</h3></button>
        { expandFiles ? this.showFiles() : ''}
      </div>
    );
  }
}

export default Directory;