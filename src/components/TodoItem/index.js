// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, onDeleteTodo} = props
  const {id, title} = todo

  const deleteTodo = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="item-list">
      <p className="title">{title}</p>
      <button className="delete-btn" type="button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
