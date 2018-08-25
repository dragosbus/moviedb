import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as Actions from './actionCreators/actionCreators';
import App from './App';
import Favorites from './components/Favorites';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

store.dispatch(Actions.addApiMiddleware('avengers'));

store.subscribe(() => console.log(store.getState()));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path='/favorites' component={Favorites}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
