import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Employees from './pages/Employees';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact component={Home} path="/"/>
          <Route exact component={Employees} path="/employees"/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
