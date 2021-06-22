// FUNCTIONAL FORMAT
const Input = (props) => {
    return (
        <div>
            <input 
                id="fruit-filter" 
                type="text" 
                placeholder="Filter Fruit By"
                value={props.value}
                onChange={props.onChange}
            />
    </div>
    )
}

export default Input

// CLASS-BASED FORMAT
// import { Component } from 'react'

// export default class Input extends Component {
//     render() {
//         return (
//             <div>
//                 <input 
//                     id="fruit-filter" 
//                     type="text" 
//                     placeholder="Filter Fruit By"
//                     value={this.props.value}
//                     onChange={this.props.onChange}
//                 />
//             </div>
//         )
//     }
// }