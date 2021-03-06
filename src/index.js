import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as Actions from './actionCreators/actionCreators';
import store from './store';
import App from './App';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

store.dispatch(Actions.fetchMovieSearched('avengers'));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
