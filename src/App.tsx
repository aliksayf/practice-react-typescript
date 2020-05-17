import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Navbar} from "./components/Navbar";
import {TodoPage} from "./pages/TodoPage";
import {InfoPage} from "./pages/InfoPage";

// declare var confirm: (question: string) => boolean

const App: React.FC = () => {

  return (
      <BrowserRouter>
        <Navbar />
        <div className='container'>
            <Switch>
                <Route component={TodoPage} path='/' exact />
                <Route component={InfoPage} path='/info' />
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
