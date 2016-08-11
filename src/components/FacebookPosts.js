import React from 'react';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';

var FacebookPosts = React.createClass({
	render() {
		return (
	      	<FacebookProvider appID="1000289580040167">
        		<EmbeddedPost href="https://www.facebook.com/permalink.php?story_fbid=1218043108215000&id=1214419241910720"/>
  			</FacebookProvider>
		);
	}
});

export default FacebookPosts;