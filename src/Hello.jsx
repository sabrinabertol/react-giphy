import React, { Component } from 'react';
import './Hello.scss';

// const Hello = (props) => {
//   return (
//     <h1 onClick={} className="hello clicked">
//     Hello {props.name}, you will be {props.age +1}
//       next year!
//     </h1>
//   );
// }

class Hello extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    const classes = this.state.clicked ? 'hello clicked' : 'hello';
    return (
      <h1 onClick={this.handleClick} className={classes}>
        Hello {this.props.name}, you will be {this.props.age + 1} next year!</h1>
    );
  }
}

export default Hello;
