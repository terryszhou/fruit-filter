import { Component } from 'react'
import './App.css'
import List from './List'
import Input from './Input'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterValue: "",
            fruitsToDisplay: this.props.fruits
        }
    }

    handleFilterChange = (e) => {
        let newFilterValue = e.target.value
        this.setState({
            filterValue: newFilterValue
        })
    }

    render() {
        return(
            <div>
                <Input 
                    value={this.state.filterValue}
                    onChange={this.handleFilterChange}
                />
                <List 
                    fruits={this.state.fruitsToDisplay}
                />
                <h3>Current Typed Value:</h3>
                <p>{this.state.filterValue}</p>
            </div>
        )
    }
}