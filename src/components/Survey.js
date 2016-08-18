import React from 'react';
import ReactDom from 'react-dom';
import CircularProgress from 'material-ui/CircularProgress';

var Survey = React.createClass({

  getInitialState: function () {
    return {
      loading: true,
      maxWidth: 700
    }
  },

  propTypes: {
    height: React.PropTypes.number.isRequired,
    src: React.PropTypes.string.isRequired,
    onLoad: React.PropTypes.func
  },

  componentDidMount: function() {
    // focus on component after mounting
    ReactDom.findDOMNode(this.refs.iFrame).focus(); 

    ReactDom.findDOMNode(this.refs.iFrame).addEventListener('load', function (survey) {
      // notify parent 
      survey.props.onLoad();
      // change state
      survey.onLoad();
    }(this));
  },

  componentWillMount: function() {
    // notify parent
    this.props.willMount;
  },

  onLoad: function () {
    this.setState({loading: false});
  },

  getStyleAfterLoading: function () {
    if (!this.state.loading) {
      return {height: this.props.height + 'px', maxWidth: this.state.maxWidth + 'px'}
    }
    return null;
  },

  render() {
    return <div style={this.getStyleAfterLoading()} className='center-block'>
              {this.state.loading ? <CircularProgress size={1} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/> : null}
              <iframe ref='iFrame' width="100%" height="100%" frameBorder="0" allowTransparency="true" src={this.props.src}></iframe>
            </div>
  }
});

export default Survey;
