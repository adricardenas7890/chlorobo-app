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
          2: "30%", 
          3: "50%", 
          4: "80%", 
          5: "80%", 
          6: "50%", 
          7: "0%"

      }

        this.handleChange = this.handleChange.bind(this);

  }

    handleChange(event) {
        let sliderValue = Number(event.target.value);
        this.setState({ value: sliderValue });       

        var opacityValue = "";
        
        for (var beam = 0; beam < 7; beam++) {
            let lowerBound = 16.66 * (beam - 1);
            let upperBound = 16.66 * (beam + 1);
            if (sliderValue <= upperBound && sliderValue >= lowerBound) {
                debugger;
                let sliderStep = (sliderValue * .07);
                let difference = (beam - sliderStep) * 100;
                let opacity = Math.abs(difference);
                let opacityString = String(opacity + "%");
                // opacityValue = String(Math.abs(i - (sliderValue * (7/100)))) + "%";
                this.beamOpacity[beam+1] = opacityString;
            }
            else {
                this.beamOpacity[beam+1] = "0%";
            }
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
                <img src={beam1} className="beam-image1" style={{opacity: props.one}} alt="beam1"></img>
                <img src={beam2} className="beam-image2" style={{opacity: props.two}} alt="beam2"></img>
                <img src={beam3} className="beam-image3" style={{opacity: props.three}} alt="beam3"></img>
                <img src={beam4} className="beam-image4" style={{opacity: props.four}} alt="beam4"></img>
                <img src={beam5} className="beam-image5" style={{opacity: props.five}} alt="beam5"></img>
                <img src={beam6} className="beam-image6" style={{opacity: props.six}} alt="beam6"></img>
                <img src={beam7} className="beam-image7" style={{opacity: props.seven}} alt="beam7"></img>
            </div>
        </div>
    )
}

export default CastitasSunSlider