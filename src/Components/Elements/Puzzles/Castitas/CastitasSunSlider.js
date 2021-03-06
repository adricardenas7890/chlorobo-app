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
      this.state = { value: 50 };
      this.beamOpacity = { 
          1: "0%", 
          2: "0%", 
          3: "50%", 
          4: "100%", 
          5: "50%", 
          6: "0%", 
          7: "0%"

      }

        this.handleChange = this.handleChange.bind(this);

  }

    handleChange(event) {
        let sliderValue = Number(event.target.value);
        this.setState({ value: sliderValue });       

        var opacityValue = "";
        var scale = [
            0,
            17,
            33,
            50,
            67,
            83,
            100
        ];
        
        for (var i = 0; i < scale.length; i++) {
            if (sliderValue < scale[i]) {
                opacityValue = (100 - (scale[i] - sliderValue)) - 50;
            }
            else if (sliderValue > scale[i]) {
                opacityValue = (100 - (sliderValue - scale[i])) - 50;
            }
            else {
                opacityValue = 100
            }
            this.beamOpacity[8-(i + 1)] = String(opacityValue * 2.2) + "%";
        }

  }

  render() {
      return (
          <div>
            <div className="slider-container">
                <input type="range" value={this.state.value} onChange={this.handleChange} className="slider" name="points" min="0" max="100"></input>     
            </div>
            <BeamImage one={this.beamOpacity[1]} two= {this.beamOpacity[2]} three={this.beamOpacity[3]} four={this.beamOpacity[4]} five={this.beamOpacity[5]} six={this.beamOpacity[6]} seven={this.beamOpacity[7]} />
        </div>
          
    );
  }
}

const BeamImage = (props) => { 
    return (
        <div className="image-holders">
            <div className="prism-holder">
                <img src={prism} className="prism-image" alt="prism"></img>
            </div>
            <div className="beams-holder">
                <img src={beams} className="beams-image" alt="beams"></img>
                <img src={beam1} className="beam-image1" style={{opacity: props.one}} alt="red beam"></img>
                <img src={beam2} className="beam-image2" style={{opacity: props.two}} alt="orange beam"></img>
                <img src={beam3} className="beam-image3" style={{opacity: props.three}} alt="yellow beam"></img>
                <img src={beam4} className="beam-image4" style={{opacity: props.four}} alt="green beam"></img>
                <img src={beam5} className="beam-image5" style={{opacity: props.five}} alt="cyan beam"></img>
                <img src={beam6} className="beam-image6" style={{opacity: props.six}} alt="blue beam"></img>
                <img src={beam7} className="beam-image7" style={{opacity: props.seven}} alt="purple beam"></img>
            </div>
        </div>
    )
}

export default CastitasSunSlider