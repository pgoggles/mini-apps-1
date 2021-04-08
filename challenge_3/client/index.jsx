class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      name: '',
      email: '',
      password: '',
      requiredShow: '',
      ID: null
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
      this.setState({requiredShow: 'Please Fill in All Required Fields.'});
    } else {
      $.ajax({
        type: 'POST',
        url: '/form1',
        data: {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        },
        success: (data) => {
          this.setState({ID: data, currentPage: 2, requiredShow: ''});
        }
      });
    }
  }

  SubmitF2 () {
    console.log(this.state);
    if (this.state.address1 === '' || this.state.city === '' || this.state.zipcode === '' || this.state.state === '') {
      this.setState({requiredShow: 'Please Fill in All Required Fields.'});
    } else {
      $.ajax({
        type: 'POST',
        url: '/form2',
        data: {
          id: this.state.ID,
          address1: this.state.address1,
          address2: this.state.address2,
          city: this.state.city,
          state: this.state.state,
          zipcode: this.state.zipcode,
          phone: this.state.phone
        },
        success: (data) => {
          console.log(data);
        }
      });
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
          <button id="SubmitF1" type="button" onClick={this.SubmitF1.bind(this)}>Next</button>
          <div class="required">{this.state.requiredShow}</div>
        </form>
      );
    } else if (this.state.currentPage === 2) {
      return (
        <form>
          <div>
            <label for="address1">Address Line 1: (Required)  </label>
            <input type="text" name="address1" id="address1" required onChange={this.handleChange.bind(this)}></input>
          </div>
          <div>
            <label for="address2">Address Line 2:  </label>
            <input type="text" name="address2" id="address2"
              required onChange={this.handleChange.bind(this)}></input>
          </div>
          <div>
            <label for="city">City: (Required)  </label>
            <input type="text" name="city" id="city"
              required onChange={this.handleChange.bind(this)}></input>
          </div>
          <div>
            <label for="state">State: (Required)  </label>
            <input type="text" name="state" id="state"
              required onChange={this.handleChange.bind(this)}></input>
          </div>
          <div>
            <label for="zipcode">Zip Code: (Required)  </label>
            <input type="text" name="zipcode" id="zipcode"
              required onChange={this.handleChange.bind(this)}></input>
          </div>
          <div>
            <label for="phone">Phone Number: (Required, Numbers Only)  </label>
            <input type="text" name="phone" id="phone"
              required onChange={this.handleChange.bind(this)}></input>
          </div>
          <button id="SubmitF2" type="button" onClick={this.SubmitF2.bind(this)}>Next</button>
          <div class="required">{this.state.requiredShow}</div>
        </form>
      );
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('App')
);