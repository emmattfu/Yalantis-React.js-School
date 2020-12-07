import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Employees from './pages/Employees';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="text" style={{fontWeight: "bold"}}>
        <Header />
        <div className="App">
        <Switch>
          <Route exact component={Home} path="/"/>
          <Route exact component={Employees} path="/employees"/>
        </Switch>
        </div>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
