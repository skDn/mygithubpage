import React from 'react';

var FacebookPosts = React.createClass({
  getInitialState: function () {
      return {
        neutralImagesSrc : [
          "https://s14.postimg.org/49yzrs1g1/14383466_1435139019835257_648122314_n.jpg",
          "https://s14.postimg.org/6skosgn69/14383515_1435136633168829_1734263586_n.jpg",
          "https://s14.postimg.org/jy06ykh1t/14365377_1435135549835604_302486912_n.jpg",
          "https://s14.postimg.org/4dst816xd/14389029_1435134679835691_516762672_n.jpg",
          "https://s14.postimg.org/jnsof82fl/14349009_1435133909835768_1424191189_n.jpg",
          "https://s14.postimg.org/mj5rm36fl/14331770_1435132983169194_1071092364_n.jpg",
          "https://s14.postimg.org/fh7tzw2tt/14388812_1435131836502642_1787808255_n.jpg",
          "https://s14.postimg.org/jrmhvh7wx/14341925_1435131116502714_1438382819_n.jpg",
          "https://s14.postimg.org/jg51iprgx/14349190_1435130056502820_453857713_n.jpg",
          "https://s14.postimg.org/teq0570wh/14383523_1435129549836204_1691774324_n.jpg",
          "https://s14.postimg.org/4muzbp93l/14341768_1435128729836286_1493375169_n.jpg",
          "https://s14.postimg.org/s2cwh1sup/14383533_1435127963169696_1146826771_n.jpg",
          "https://s14.postimg.org/tioez6vrl/14348975_1435127266503099_1922792105_n.jpg",
          "https://s14.postimg.org/mgqhczs5t/14348708_1435125819836577_1177528652_n.jpg",
          "https://s14.postimg.org/g4bc35p3l/14348638_1435125103169982_1891154696_n.jpg",
          "https://s14.postimg.org/x646593yp/14348621_1435123026503523_1418370704_n.jpg",
          "https://s14.postimg.org/vscj9y4pd/14388896_1435121319837027_1685348835_n.jpg",
          "https://s14.postimg.org/yay8amqfl/14341574_1435118789837280_614241699_n.jpg",
          "https://s14.postimg.org/5mla7eo9d/14389028_1435115403170952_1550358995_n.jpg",
          "https://s14.postimg.org/bepzsangx/14348875_1435112436504582_1187516147_n.jpg"
        ],
        positiveImagesSrc : [
          "https://s14.postimg.org/rn1mo16xd/14348759_1435113893171103_526164711_n.jpg",
          "https://s14.postimg.org/m2tqr4xg1/14365327_1435089923173500_1136063769_n.jpg"
        ],
        negativeImagesSrc : [
          "https://s14.postimg.org/sqqcdqgy9/14388907_1435113073171185_96059495_n.jpg",
          "https://s14.postimg.org/bh9vf4r4h/14365406_1435089689840190_150328757_n.jpg"
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