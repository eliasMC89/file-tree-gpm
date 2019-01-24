import React, { Component } from 'react';
import './App.css';
import Directory from './components/Directory';
import File from './components/File';

class App extends Component {

  state = {
    expandDirectories: false,
    directories: [1, 2, 3],
    isFilePreview: false,
    currentFile: '',
  }

  showDirectories = () => {
    const { directories } = this.state;

    return (
      <ul>
        {directories.map((num) => {
          return (
            <li key={num} >
              <Directory numDirectory={num} clickFile={this.previewFile} />
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

  render() {
    const { expandDirectories, isFilePreview, currentFile } = this.state;

    return (
      <div>
        <div className="App">
          <button onClick={this.handleClickMainDir} ><h1>Main Directory</h1></button>
          { expandDirectories ? this.showDirectories() : '' }
        </div>
        <div>
          { isFilePreview ? <File file={currentFile} /> : '' }
        </div>
      </div>
    );
  }
}

export default App;
