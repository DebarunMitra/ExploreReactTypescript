import React, {Component} from 'react'
import { render } from 'react-dom'

type CounterProps = {
    message: string
}

type CounterState = {
    count: number
}

export class CounterClass extends Component<CounterProps, CounterState> { // if props is not present then we can add '{}', and for no state we can remove the type params. 
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}
