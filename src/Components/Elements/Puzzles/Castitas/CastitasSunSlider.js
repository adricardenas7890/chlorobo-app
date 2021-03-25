import React from 'react';
import prism from './img/prism.png';
import beams from './img/BeamsFull6-correctSpacing.png'
import beam1 from './img/beam1.png'
import beam2 from './img/beam2.png'
import beam3 from './img/beam3.png'
import beam4 from './img/beam4.png'
import beam5 from './img/beam5.png'
import beam6 from './img/beam6.png'
import beam7 from './img/beam7.png'


class CastitasSunSlider extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {value: 50};

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
      this.setState({ value: event.target.value });
  }

  render() {
      return (
          <div>
            <div className="slider-container">
                <input type="range" value={this.state.value} onChange={this.handleChange} className="slider" name="points" min="0" max="100"></input>     
            </div>
            <BeamImage />
        </div>
          
    );
  }
}

const BeamImage = () => { 
    return (
                    <div className="image-holders">
                    <div className="prism-holder">
                        <img src={prism} className="prism-image" alt="prism"></img>
                    </div>
                    <div className="beams-holder">
                <img src={beams} className="beams-image" alt="beams"></img>
                <img src={beam1} className="beam-image1" alt="beam1"></img>
                <img src={beam2} className="beam-image2" alt="beam2"></img>
                <img src={beam3} className="beam-image3" alt="beam3"></img>
                <img src={beam4} className="beam-image4" alt="beam4"></img>
                <img src={beam5} className="beam-image5" alt="beam5"></img>
                <img src={beam6} className="beam-image6" alt="beam5"></img>
                <img src={beam7} className="beam-image7" alt="beam5"></img>

                    </div>
        </div>
    )
}

export default CastitasSunSlider