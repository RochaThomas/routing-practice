import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Results from './components/Results';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h2>Routing</h2>
      <Link to='/hello'>Link Tag Hello</Link>
      <Link to='/'>Link Tag Home</Link>
      <Link to='/results'>Link Tag Results</Link>
      <Link to='/form'>Link Tag Form</Link>
      <hr/>
      <Switch>
        {/* passes a variable in the route */}
        <Route path={'/results:varName'}>
          <Results/>
        </Route>

        <Route path='/form'>
          <Form/>
        </Route>

        <Route path={'/'}>
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
