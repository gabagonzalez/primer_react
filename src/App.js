import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//importar componentes
import Micomponent from './components/Micomponent';


function App() {

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo xD.
        </p>
        <section className="componentes">
        <Micomponent />

      </section>
      </header>
      
    </div>
  );
}

export default App;
