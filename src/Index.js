import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory } from 'react-router';
import HorizontalLinearStepper from './components/HorizontalLinearStepper';

window.React = React;

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App} >
    	<Route path="p" positive={true} component={HorizontalLinearStepper} />
    	<Route path="n" positive={false} component={HorizontalLinearStepper} />
    </Route>
  </Router>), document.getElementById('content')
);
