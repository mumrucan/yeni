import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import CreateProject from './components/projects/CreateProject';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/create" component={CreateProject}></Route>
        <Route path="/event/:id" component={ProjectDetails}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
