class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      name: '',
      email: '',
      password: '',
      requiredF1: ''
    };
  }
  handleChange (event) {
    this.setState({[event.target.id]: event.target.value});
  }

  checkoutZero() {
    this.setState({currentPage: 1});
  }

  SubmitF1 () {
    if (this.state.name === '' || this.state.email === '' || this.state.password === '') {
      this.setState({requiredF1: 'Please Fill in All Required Fields.'})
    }
  }

  render() {
    if (this.state.currentPage === 0) {
      return (
        <button id="Checkout" type="button" onClick={this.checkoutZero.bind(this)}>Checkout</button>
      );
    } else if (this.state.currentPage === 1) {
      return (
        <form>
          <div>
            <label for="name">Name: (Required)  </label>
            <input type="text" name="name" id="name" required onChange={this.handleChange.bind(this)}></input>
          </div>
          <div>
            <label for="email">Email: (Required)  </label>
            <input type="text" name="email" id="email"
              required onChange={this.handleChange.bind(this)}></input>
          </div>
          <div>
            <label for="password">Password: (Required)  </label>
            <input type="password" name="password" id="password"
              required onChange={this.handleChange.bind(this)}></input>
          </div>
          <button id="SubmitF1" type="button" onClick={this.SubmitF1.bind(this)}>Checkout</button>
          <div class="required">{this.state.requiredF1}</div>
        </form>
      );
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('App')
);