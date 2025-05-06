import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </>
    );
  }
}

export default Todo;
