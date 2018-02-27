import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import PostsIndex from './components/postIndex';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
	  <BrowserRouter>
		  <div>

			  {/* path: url user tries to go to
			  component: component to render */}
			  <Route path="/" component={PostsIndex} />
			  {/* <Route path="/posts/:id" component={PostsShow} />
			  <Route path="/posts/new" component={PostsShow} /> */}

		  </div>
	  </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
