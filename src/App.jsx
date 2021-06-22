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
        let filteredFruit = this.props.fruits.filter(fruit => {
            return fruit.toLowerCase().includes(newFilterValue.toLowerCase())
        })
        this.setState({
            filterValue: newFilterValue,
            fruitsToDisplay: filteredFruit
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
            </div>
        )
    }
}