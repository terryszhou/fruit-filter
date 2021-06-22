// FUNCTIONAL FORMAT
import {v4 as uuidv4} from 'uuid'

const List = (props) => {
    let fruitItems = props.fruits.map((fruit) => {
        return <li key={uuidv4()}>{fruit}</li>
    })
    return <ul>{fruitItems}</ul>
}

export default List

// CLASS-BASED FORMAT
// import { Component } from 'react'
// import {v4 as uuidv4} from 'uuid'

// export default class List extends Component {
//     render() {
//         const fruitItems = this.props.fruits.map((fruit) => {
//             return <li>{fruit}</li>
//         })
//         return (
//             <ul>
//                 {fruitItems}
//             </ul>
//         )
//     }
// }

