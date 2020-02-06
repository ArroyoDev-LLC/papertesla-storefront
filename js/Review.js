class ReviewFormButton extends React.Component {
  constructor(props) {
    super(props);

  }
  handleClick() {
    return ReactDOM.render(<ReactForm />, document.querySelector("#react-window"));

  }
  render() {
    return <button type="button" onClick={this.handleClick}>Write a Review</button>;
  }
}

class ReactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: " "};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("Form Submitted! Thank you for your review!");
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name: </label> <input id="Name" type="text" defaultValue="Anonymous" onchange={this.handleChange} />
        <br /><br />
        <label>Rating:</label> <input id="Rating" type="text" onchange={this.handleChange} />
        <br /><br />
        <label>Review:</label><input type="textarea" id="Review-textarea" cols='9' rows='9' maxlength={250} defaultValue="Write Review Here!" onchange={this.handleChange} /> 
        <br /><br/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(
  <div>
    <ReviewFormButton />
  </div>,
  document.getElementById("react-button")
);
