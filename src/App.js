import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import CreateProject from './components/projects/CreateProject';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ProjectList from './components/projects/ProjectList';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path="/" exact component={ProjectList}></Route>
        <Route path="/create" component={CreateProject}></Route>
        <Route path="/event_detail/:id" component={ProjectDetails}></Route>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
