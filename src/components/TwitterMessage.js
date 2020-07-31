import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      remainingChars: 0,
      error: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    let remaining = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <p>{remaining} characters remaining.</p>
        <input 
          onChange={event => this.handleChange(event)}
          value={this.state.message}
          type="text" 
          name="message" 
          id="message" />
      </div>
    );
  }
}

export default TwitterMessage;