import React from 'react'
import ReactDOM from 'react-dom';

class MouseTracker extends React.Component {
    state = {x: 0, y: 0};

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY,
        });
    };

    render() {
        return (
            <div style={{ height: '100vh'}} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <h1>Render Props Example</h1>
            <MouseTracker render={({ x, y }) => <p>mouse position: {x}, {y}</p>} />
        </div>
    )
}

export default App;
