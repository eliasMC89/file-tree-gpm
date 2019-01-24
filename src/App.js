import React, { Component } from 'react';
import filesService from './data/files/filesService';
import './App.css';
import Directory from './components/Directory';
import File from './components/File';

class App extends Component {

  state = {
    files: [],
    expandDirectories: false,
    directories: [1, 2, 3],
    isFilePreview: false,
    currentFile: '',
  }

  componentDidMount () {
    filesService.getFiles()
      .then((files) => {
        this.setState({
          files,
        })
      })
  }

  showDirectories = () => {
    const { directories, files } = this.state;

    return (
      <ul>
        {directories.map((num) => {
          return (
            <li key={num} >
              <Directory numDirectory={num} clickFile={this.previewFile} files={files} />
            </li>
          )
        })}
      </ul>
    )
  }

  handleClickMainDir = () => {
    const { expandDirectories } = this.state;

    if (!expandDirectories) {
      this.setState({
        expandDirectories: true,
      })
    } else {
      this.setState({
        expandDirectories: false,
      })
    }
  }

  previewFile = (file) => {
    const { isFilePreview, currentFile } = this.state;
    const previewFile = !isFilePreview;
    if (currentFile === '' || file.id === currentFile.id) {
      this.setState({
        isFilePreview: previewFile,
        currentFile: file,
      })
    } else {
      this.setState({
        isFilePreview: true,
        currentFile: file,
      })
    }

  }

  closePreview = () => {
    this.setState({
      isFilePreview: false,
    })
  }

  render() {
    const { expandDirectories, isFilePreview, currentFile } = this.state;

    return (
      <div>
        <div className="App">
          <button onClick={this.handleClickMainDir} ><h1>Main Directory</h1></button>
          { expandDirectories ? this.showDirectories() : '' }
        </div>
        <div>
          { isFilePreview ? <File file={currentFile} closePreview={this.closePreview} /> : '' }
        </div>
      </div>
    );
  }
}

export default App;
