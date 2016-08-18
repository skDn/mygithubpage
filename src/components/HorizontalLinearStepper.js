import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Concent from './Concent';
import FacebookPosts from './FacebookPosts';
import TwitterPosts from './TwitterPosts';
import Survey from './Survey';

/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
var HorizontalLinearStepper = React.createClass({

  getInitialState: function () {
    return {
      finished: false,
      stepIndex: 0,
      stepText: [
        'Sign concent form',
        'Personal Information Survey',
        'Browse Facebook feed',
        'Fill in a questionnare',
        'Browse Twitter feed',
        'Fill in a questionnare'
      ],
      isIFrameLoading: false
    }
  },

  handleNext: function () {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 5,
    });
    this.forceUpdate();
  },

  handlePrev : () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  },

  getButtonLable: (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return 'Confirm';
      case 5:
        return 'Finish';
      default:
        return 'Next';
    }
  },
  /**
   * Getting a servey.
   * @param {boolean} facebook - is the servey for facebook or not. If not, it is for twitter.
   * @param {boolean} positive - is the servey positive or not.
   */
  getServey(facebook, positive) {
    if (facebook && positive) {
      return <Survey onLoad={this._iframeLoaded} willMount={this._willMountIFrame} height={1064} src="https://surveymonkey.com/r/N7YZQBP"/>
    }
    else if (!facebook && positive) {
      return <Survey onLoad={this._iframeLoaded} willMount={this._willMountIFrame} height={1028} src="https://surveymonkey.com/r/N97PVW7"/>
    }
    else if (facebook && !positive) {
      return <Survey onLoad={this._iframeLoaded} willMount={this._willMountIFrame} height={1064} src="https://surveymonkey.com/r/N9H85WZ"/>
    }
    return <Survey onLoad={this._iframeLoaded} willMount={this._willMountIFrame} height={1028} src="https://surveymonkey.com/r/N9ZLZBQ"/>
  },

  _iframeLoaded: function() {
    this.setState({
      isIFrameLoading: false
    });
  },

  _willMountIFrame: function () {
    this.setState({
      isIFrameLoading: true
    });
  },

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Concent/>;
      case 1: 
        return <Survey onLoad={this._iframeLoaded} willMount={this._willMountIFrame} height={995} src="https://surveymonkey.com/r/KBSCWQ9"/>
      case 2:
        return <FacebookPosts positive={this.props.route.positive}/>;
      case 3:
        // get facebook survey
        return this.getServey(true, this.props.route.positive);
      case 4:
        return <TwitterPosts positive={this.props.route.positive}/>;
      case 5:
        // get twitter survey
        return this.getServey(false, this.props.route.positive);
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  },

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', height: '100%'};
    
    return (
      <div style={{width: '100%', margin: 'auto', height: '100%'}}>
        <Stepper activeStep={stepIndex}>
          {
            this.state.stepText.map(function(text,index) {
                return <Step key={index}><StepLabel>{text}</StepLabel></Step>
            })
          }
        </Stepper>
        <div style={contentStyle}>
          {this.state.finished ? (
            <h3 className='text-center'>
              Thank you so much for completing the forms!
            </h3>
          ) : (
            <div style={{height: '100%'}}>
              {this.getStepContent(stepIndex)}
              <div style={{margin: 12}} className='text-center'>
                {(this.state.stepIndex%2 === 1 ) ? <h4>Please complete the questionnare first and press 'Done' before continuing!</h4> : ""}
                <RaisedButton
                  label={this.getButtonLable(stepIndex)}
                  primary={true}
                  onTouchTap={this.handleNext}
                  disabled={this.state.isIFrameLoading}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
});

export default HorizontalLinearStepper;