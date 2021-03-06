class ReviewFormButton extends React.Component {
  constructor(props) {
    super(props);


  }
  handleClick() {
    // document.getElementById("form-popup").style.visibility="visible";
    // document.getElementById('react-window').style.visibility="visible";
    return ReactDOM.render(<ReactForm />, document.querySelector("#react-window"));

  }
  render() {
    return <button type="button" class="rounded react-button-style" id="reactButton" onClick={this.handleClick}>Write a Review</button>;
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
    alert("Form Submitted! Thank you for your review! \n this page will now refresh!");
    axios.post('/urltoapi',
    {
      form: getElementById(reviewForm),
      formData:
      {
         Name: document.getElementById("Name"),
         Rating: document.getElementById("Rating"),
         Review: document.getElementById("Review-textarea")
      }
    });
  }
  render() {
    return (
      <div class="container ml-3">
      <form id="reviewForm" class="react-form" name="reviewForm" onSubmit={this.handleSubmit}>
        <div class="row">
        <div class="col-4"></div>
        <div class="col-md-3">
        <label>Name</label>
        </div>
        </div>
        <div class="row">
        <div class="col-3"></div>
        <div class="col-md-4">
        <input id="Name" class="form-Name" type="text" placeholder="Name here or put anonymous!" required onchange={this.handleChange} />
        </div>
        </div>       
        <br /><br />
        <div class="row">
        <div class="col-4"></div>
        <div class="col-md-3">
        <label>Rating</label>
        </div>
        </div>
        <div class="row">
        <div class="col-md-3"></div>
        <div class="col-sm-5">
        {/* <input id="Rating" class="form-Rating" type="text" onchange={this.handleChange} /> */}
        <span type="radio" index={1} class="fa fa-star star-rating"></span>
        <span type="radio" index={2} class="fa fa-star star-rating"></span>
        <span type="radio" index={3} class="fa fa-star star-rating"></span>
        <span type="radio" index={4} class="fa fa-star star-rating"></span>
        <span type="radio" index={5} class="fa fa-star star-rating"></span>

        </div>
        <div class="col-md-7"></div>
        </div>
        <br /><br />
        {/* <div class="row">
        <div class="col-4"></div>
        <div class="col-md-3">
        <label>Review</label>
        </div>
        </div> */}
        <div class="row">
        <div class="col-3"></div>
        <div class="col-md-3">
        <textarea class="form-textarea mr-5" id="Review-textarea" cols="30" rows="5" placeholder="Write review here!" maxlength='150' onchange={this.handleChange} required /> 
        </div>
        </div>
        {/* <br /><br/> */}
        <div class="row">
        <div class="col-4"></div>
        <div class="col-md-3">
        <button type="submit" class="rounded react-button-style  mb-2 mt-2">Submit</button>
        </div>
        </div>
      </form>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <ReviewFormButton />
  </div>,
  document.getElementById("react-button")
);
