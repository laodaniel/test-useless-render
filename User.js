import React from "react";

// Note how the debugger below gets hit when *any* delete
// button is clicked. Why? Because the parent component
// uses an arrow function, which means this component
//
class User extends React.PureComponent {
  render() {
    const { name, onDeleteClick, id } = this.props;
    console.log(`${name} just rendered`);
    return (
      <li>
        <button type="button" value={id} onClick={onDeleteClick}>
        delete
        </button>
        {name}
      </li>
    );
  }
}

export default User;
