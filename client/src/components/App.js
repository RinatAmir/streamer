import React from 'react';
import Header from './Header.component';
import StreamList from './streams/StreamList.component';
import StreamCreate from './streams/StreamCreate.components';
import StreamEdit from './streams/StreamEdit.component';
import StreamDelete from './streams/StreamDelete.component';
import StreamShow from './streams/StreamShow.component';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={StreamList} />
            <Route path='/streams/new' exact component={StreamCreate} />
            <Route path='/streams/edit/:id' exact component={StreamEdit} />
            <Route path='/streams/delete/:id' exact component={StreamDelete} />
            <Route path='/streams/:id' exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
