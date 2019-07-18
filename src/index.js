import React from 'react';
import ReactDOM from 'react-dom';

class AnimationText extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.text, fontSize: 10 };
        for(let i = this.state.fontSize; i < 20; i++){
            setTimeout(() => this.setState({fontSize: i}), 1000)
        }
    }
    render() {
        return <h1 style={this.state}>{this.state.text}</h1>
    }
};

ReactDOM.render(<AnimationText text='bla-bla-bla' />, document.getElementById('div1'))