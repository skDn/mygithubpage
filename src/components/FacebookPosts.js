import React from 'react';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';

var FacebookPosts = React.createClass({
  getInitialState: function () {
      return {
        neutralImagesSrc : [
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14383466_1435139019835257_648122314_n.png?oh=cf9ccffedd13a62d40a4682d00647fb0&oe=57E9A7E2",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14383515_1435136633168829_1734263586_n.png?oh=4866ded91c89fa94c8499bf3798e4fd1&oe=57E8981F",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14365377_1435135549835604_302486912_n.png?oh=81555aa976bdb923cc27186b0a636c25&oe=57E8B33F",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14389029_1435134679835691_516762672_n.png?oh=f65a6cfcbe5f1e13fc2ca7309c9bf17d&oe=57E9B3F2",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14349009_1435133909835768_1424191189_n.png?oh=0ae4ef4a0949ca79f9250d4d895f2bbc&oe=57E991EE",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14331770_1435132983169194_1071092364_n.png?oh=8bd7ca199665094d1fb60477b7357d49&oe=57E96931",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14388812_1435131836502642_1787808255_n.png?oh=18cff03fd2efe15f0a852a25dda29bf2&oe=57E98849",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14341925_1435131116502714_1438382819_n.png?oh=d14426f5d6be20f146b0eda259eeb21a&oe=57E99C35",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14349190_1435130056502820_453857713_n.png?oh=d70e26c820f11d23198c55cca4b07267&oe=57E876F1",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14383523_1435129549836204_1691774324_n.png?oh=92547c5dff95685f7a7e86dbbf5c8286&oe=57E98AE6",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14341768_1435128729836286_1493375169_n.png?oh=80b265645fcd94996f46d2bd58069c6f&oe=57E88DD0",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14383533_1435127963169696_1146826771_n.png?oh=e487137f780ab7eaeea69328b66ee6d7&oe=57E8AC73",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14348975_1435127266503099_1922792105_n.png?oh=7173c079857067dacd4a5f38f06572b9&oe=57E97F38",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14348708_1435125819836577_1177528652_n.png?oh=005f21a612eddef11b39e6f08a1ebc73&oe=57E9787C",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14348638_1435125103169982_1891154696_n.png?oh=2fbba1391d2b054b676a810fab7b9f16&oe=57E99C0B",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14348621_1435123026503523_1418370704_n.png?oh=f4b3887c33d226c23550000a65f2899f&oe=57E8741F",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14388896_1435121319837027_1685348835_n.png?oh=27e65ff63da06887f004eca78ac87249&oe=57E8821B",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14341574_1435118789837280_614241699_n.png?oh=a1d77a4ae11608cacbd1fad4bb0d4692&oe=57E9B425",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14389028_1435115403170952_1550358995_n.png?oh=7dca1056817bbdbd8e483cc7067ce1e2&oe=57E96CD2",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14348875_1435112436504582_1187516147_n.png?oh=8c6919e5e7a8d9a4e50ca86b72376492&oe=57E8A2CD"
        ],
        positiveImagesSrc : [
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14348759_1435113893171103_526164711_n.png?oh=cda3ad25f137aa4a836bd5e2009dee57&oe=57E8B5D0",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14365327_1435089923173500_1136063769_n.png?oh=37bad8b2d4bdcbe138a4a2f366fbc2bc&oe=57E993AE"
        ],
        negativeImagesSrc : [
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14388907_1435113073171185_96059495_n.png?oh=c72915627c57eff7192e8726265f3eba&oe=57E9986D",
          "https://scontent-lhr3-1.xx.fbcdn.net/v/t34.0-12/14365406_1435089689840190_150328757_n.png?oh=5f74c70435a2176bbbef27e96cd585c1&oe=57E89531"
        ]
      }
  },

  getImagesSrc : function () {
    var initialArray = this.state.neutralImagesSrc;

    if (this.props.positive) {
      initialArray = initialArray.concat(this.state.positiveImagesSrc)
    }
    else {
      initialArray = initialArray.concat(this.state.negativeImagesSrc)
    }

    this.shuffle(initialArray);

    return initialArray.map((imageSrc, index) => (
      <div className="row" key={index}>
        <img className="img-responsive center-block" src={imageSrc} style={{marginBottom : "10px"}}/>
      </div>
    ));
    
  },
  /**
  * Shuffles array in place.
  * @param {Array} a items The array containing the items.
  */
  shuffle : function (a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
  },

	render() {
    var array = this.getImagesSrc();
		return (
      <div className="row">
        {
          this.getImagesSrc()
        }
      </div>
		);
	}
});

export default FacebookPosts;