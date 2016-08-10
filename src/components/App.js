import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var App = React.createClass({
  render () {
    return (
        <MuiThemeProvider>
          {this.props.children}
        </MuiThemeProvider>
      );
  }
});

export default App;
