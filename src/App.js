import React, { Component } from 'react';
import './App.css';
import Directory from './components/Directory';

class App extends Component {

  state = {
    expandDirectories: false,
    directories: [1, 2, 3],
  }

  showDirectories = () => {
    const { directories } = this.state;

    return (
      <ul>
        {directories.map((num) => {
          return (
            <li key={num} >
              <Directory numDirectory={num} />
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

  showFiles = () => {

  }

  render() {
    const { expandDirectories } = this.state;

    return (
      <div className="App">
        <button onClick={this.handleClickMainDir} ><h1>Main Directory</h1></button>
        { expandDirectories ? this.showDirectories() : '' }
      </div>
    );
  }
}

export default App;
