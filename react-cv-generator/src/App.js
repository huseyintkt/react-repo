import React from 'react'
import ReactToPrint from 'react-to-print';
import './App.css'
import Cv from './components/Cv'

class App extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#!">Print this out!</a>}
          content={() => this.componentRef}
        />
        <Cv ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default App;