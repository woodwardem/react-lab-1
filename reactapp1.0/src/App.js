import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './Header.js';
class App extends React.Component {

render(){
  return <p>This is my custom react Component. </p>
}


}

class App extends React.Component {
  constructor1(name, age) {
    super()
    this.state= {
      name: 'McCall',
      age: '17',
    }
  }
}
export default App
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
