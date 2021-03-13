import React, { Component } from "react";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    console.log("Search props inside handleSubmit", this.props);
    this.props.onSearchComplete();
  }

  render() {
    return (
      <div>
        <p>Results Displayed</p>
      </div>
    );
  }
}

export default Results;
