import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos,
      newTitle: "",
      newContent: "",
      editingIndex: null,
      editingTitle: "",
      editingContent: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  //   componentDidMount
  //   componentDidUpdate
  //   componentWillUnmount

  //   const [number, setNumber] = useState({
  //     x: "",
  //     y: ""
  //   });

  handleInputChange(e) {
    this.setState({ newTitle: e.target.value });
  }

  handleContentChange(e) {
    this.setState({ newContent: e.target.value });
  }

  addTodo = () => {
    if (
      this.state.newTitle.trim() === "" ||
      this.state.newContent.trim() === ""
    )
      return;

    this.setState((prevState) => ({
      todos: [
        ...prevState.todos,
        { title: prevState.newTitle, content: prevState.newContent },
      ],
      newTitle: "",
      newContent: "",
    }));
  };

  deleteTodo = (index) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((_, i) => i !== index),
    }));
  };

  startEditing = (index, title, content) => {
    this.setState({
      editingIndex: index,
      editingTitle: title,
      editingContent: content,
    });
  };

  handleEditTitleChange = (e) => {
    this.setState({ editingTitle: e.target.value });
  };

  handleEditContentChange = (e) => {
    this.setState({ editingContent: e.target.value });
  };

  saveEdit = (index) => {
    if (
      this.state.editingTitle.trim() === "" ||
      this.state.editingContent.trim() === ""
    )
      return;

    const updatedTodos = [...this.state.todos];
    updatedTodos[index] = {
      title: this.state.editingTitle,
      content: this.state.editingContent,
    };

    this.setState({
      todos: updatedTodos,
      editingIndex: null,
      editingTitle: "",
      editingContent: "",
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>

        {/* Input fields for adding a new todo */}
        <input
          type="text"
          value={this.state.newTitle}
          onChange={this.handleInputChange}
          placeholder="Enter title..."
        />
        <input
          type="text"
          value={this.state.newContent}
          onChange={this.handleContentChange}
          placeholder="Enter content..."
        />
        <button onClick={this.addTodo}>Add</button>

        {/* Display todo items */}
        {this.state.todos.map((todo, index) => (
          <div key={index}>
            {this.state.editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={this.state.editingTitle}
                  onChange={this.handleEditTitleChange}
                  placeholder="Edit title..."
                />
                <input
                  type="text"
                  value={this.state.editingContent}
                  onChange={this.handleEditContentChange}
                  placeholder="Edit content..."
                />
                <button onClick={() => this.saveEdit(index)}>Save</button>
                <button onClick={() => this.setState({ editingIndex: null })}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <Todo title={todo.title} content={todo.content} />
                <button
                  onClick={() =>
                    this.startEditing(index, todo.title, todo.content)
                  }
                >
                  Edit
                </button>
                <button onClick={() => this.deleteTodo(index)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;
