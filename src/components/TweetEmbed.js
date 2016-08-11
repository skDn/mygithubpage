// # react-tweet-embed

// ## Install
// ```
// npm i react-tweet-embed
// #or
// jspm i npm:react-tweet-embed
// ```

// ## Usage

// ```javascript
// import TweetEmbed from 'react-tweet-embed'

// <TweetEmbed id='692527862369357824'></TweetEmbed>
// ```

// You don't have to put `//platform.twitter.com/widgets.js` in your index.html as this lib will put it there if `twttr` is not found on window.  
import React, {PropTypes} from 'react'

var callbacks = [];

function addScript (src, cb) {
  if (callbacks.length === 0) {
    callbacks.push(cb)
    var s = document.createElement('script')
    s.setAttribute('src', src)
    s.onload = () => callbacks.forEach((cb) => cb())
    document.body.appendChild(s)
  } else {
    callbacks.push(cb)
  }
}

var TweetEmbed = React.createClass ({
  propTypes: {
    id: PropTypes.string
  },

  componentDidMount () {
    const renderTweet = () => {
      window.twttr.widgets.createTweetEmbed(this.props.id, this._div)
    }
    if (!window.twttr) {
      addScript('//platform.twitter.com/widgets.js', renderTweet)
    } else {
      renderTweet()
    }
  },
  
  render () {
    return <div ref={(c) => this._div = c} />
  }
});


export default TweetEmbed
