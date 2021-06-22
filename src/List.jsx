// FUNCTIONAL FORMAT
const List = (props) => {
    let fruitItems = props.fruits.map((fruit) => {
        return <li>{fruit}</li>
    })
    return (
        <ul>
            {fruitItems}
        </ul>
    )
}

export default List

// CLASS-BASED FORMAT
// import { Component } from 'react'

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

