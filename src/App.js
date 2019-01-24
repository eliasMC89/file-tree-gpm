import React, { Component } from 'react';
import filesService from './data/files/filesService';
import './App.css';
import Directory from './components/Directory';
import File from './components/File';

class App extends Component {

  state = {
    files: [],
    expandDirectories: false,
    directories: ['Docs', 'Downloads', 'Others'],
    isFilePreview: false,
    currentFile: '',
    hasError: false,
  }

  componentDidMount () {
    filesService.getFiles()
      .then((files) => {
        this.setState({
          files,
        })
      })
      .catch(() => {
        this.setState({
          hasError: true,
        })
      })
  }

  showDirectories = () => {
    const { directories, files } = this.state;

    return (
      <ul>
        {directories.map((name) => {
          return (
            <li key={name} className="dir-list">
              <Directory nameDirectory={name} clickFile={this.previewFile} files={files} />
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
        isFilePreview: false,
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
    const { expandDirectories, isFilePreview, currentFile, hasError } = this.state;

    if (hasError) {
       return <h1 className="error-msg" >Something went wrong!</h1>
    }

    return (
      <div className="App">
        <div>
          <button className="main-dir" onClick={this.handleClickMainDir} ><h1>Main</h1></button>
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
