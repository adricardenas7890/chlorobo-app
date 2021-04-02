import React from 'react';
import ReactPlayer from 'react-player';

class IndustriaVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleFlag: false,
            classNameDiv: "industria-player-div"
        };
        this.fadeInFunction = this.fadeInFunction.bind(this);

    }

    fadeInFunction() {
        this.setState({
            visibleFlag: true,
            classNameDiv: "industria-player-div"
        });
    }

    render() {
        return (            
            <ReactPlayer className="industria-player"
                url="https://player.vimeo.com/video/530111521?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                height="100%"
                width="100%"
                controls={false}
                onReady={this.fadeInFunction}
                playing={true}
                loop={true}            
            />                
        )
    }

}

export default IndustriaVideo