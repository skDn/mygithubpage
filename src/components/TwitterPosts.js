import React from 'react';

var TwitterPosts = React.createClass({
  getInitialState: function () {
      return {
        neutralImagesSrc : [
          "https://s22.postimg.org/3op6h1xxd/14509418_1448223658526793_564358391_n.jpg",
          "https://s22.postimg.org/550oz70u9/14501898_1448222201860272_1637197189_n.jpg",
          "https://s22.postimg.org/gin8aebcx/14508478_1448221225193703_905500541_n.jpg",
          "https://s22.postimg.org/q4gsqp2ip/14501982_1448220638527095_259090360_n.jpg",
          "https://s22.postimg.org/j2iv4hywx/14501906_1448219928527166_562559958_n.jpg",
          "https://s22.postimg.org/u3e09ir5t/14508515_1448218898527269_1232516005_n.jpg",
          "https://s22.postimg.org/d451u9fy9/14518824_1448218618527297_1446924070_n.jpg",
          "https://s22.postimg.org/8v5dp7j0h/14528477_1448218301860662_725075233_n.jpg",
          "https://s22.postimg.org/bqigw2n0h/14518381_1448218018527357_1534005757_n.jpg",
          "https://s22.postimg.org/djldke875/14518455_1448217311860761_1942201493_n.jpg",
          "https://s22.postimg.org/o7p4j8i69/14527640_1448217015194124_1280768197_n.jpg",
          "https://s22.postimg.org/665zlfo5d/14509265_1448216141860878_974437692_n.jpg",
          "https://s22.postimg.org/555qwb75t/14508754_1448215715194254_348208937_n.jpg",
          "https://s22.postimg.org/j041es1kx/14470822_1448215041860988_1285773455_n.jpg",
          "https://s22.postimg.org/naipad6o1/14518570_1448214668527692_2106655533_n.jpg",
          "https://s22.postimg.org/46pdu0ttt/14470892_1448214125194413_624431779_n.jpg",
          "https://s22.postimg.org/o2ld9kav5/14518786_1448213688527790_1320506912_n.jpg",
          "https://s22.postimg.org/fyhuikdtt/14509150_1448213108527848_1257778277_n.jpg"
        ],
        positiveImagesSrc : [
          "https://s22.postimg.org/3l50bno5d/14483819_1448210995194726_599943025_n.jpg"
        ],
        negativeImagesSrc : [
          "https://s22.postimg.org/iv4viujnl/14518290_1448210751861417_1770446361_n.jpg"
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

export default TwitterPosts;