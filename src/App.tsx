import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Login  from "./components/Login";
import News from './components/News';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/news' exact component={News} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
