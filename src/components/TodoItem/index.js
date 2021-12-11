import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {userDetails, deleteUser} = this.props
    const {title, id} = userDetails
    const deleteFunction = () => {
      deleteUser(id)
    }
    return (
      <li className="ItemContainer">
        <p className="paragraph">{title}</p>
        <div>
          <button className="btn" type="submit" onClick={deleteFunction}>
            Delete
          </button>
        </div>
      </li>
    )
  }
}
export default TodoItem
