import React from 'react';
import ReactDOM from 'react-dom';

class AnimationText extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.text, fontSize: 10 };
        setInterval(() => this.setState({ fontSize: Math.random() * 10 + 10 }), 1000);
    }
    render() {
        return <h1 style={this.state}>{this.props.text}</h1>
    }
};

ReactDOM.render(<AnimationText text='bla-bla-bla' />, document.getElementById('div1'))