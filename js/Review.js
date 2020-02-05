class ReviewFormButton extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    alert("React is working");
    return render(<ReactForm />, document.querySelector("#react-window"));
  }
  render() {
    return <button onClick={this.handleClick}>Write a Review</button>;
  }
}

class ReactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: " " };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("Form Submitted! Thank you for your review!" + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: <input type="text" value={this.state.value} />
        </label>
        <label>
          Rating: <input type="text" vale={this.state.value} />
        </label>
        <input type="textarea" defaultValue="Write Review Here!" />
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
