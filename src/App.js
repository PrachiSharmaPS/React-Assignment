import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      a: '',
      convert: false,
    };
  }
  render() {
    return (
      <div className='App'>
        <textarea
          value={this.state.a}
          onChange={(e) => this.setState({ a: e.target.value })}
        />
        <br />
        <button
          onClick={() => {
            this.setState({
              convert: !this.state.convert,
            });
          }}
        >
          Click to Covert
        </button>
        {this.state.convert && <p> {this.state.a.toUpperCase()}</p>}
      </div>
    );
  }
}

export default App;
