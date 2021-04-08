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
    if (this.state.address1 === '' || this.state.city === '' || this.state.zipcode === '' || this.state.state === '' || this.state.phone === '') {
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
          this.setState({currentPage: 3, requiredShow: ''});
        }
      });
    }
  }
  SubmitF3 () {
    console.log(this.state);
    if (this.state.creditcard === '' || this.state.expirydate === '' || this.state.cvv === '' || this.state.billingzip === '') {
      this.setState({requiredShow: 'Please Fill in All Required Fields.'});
    } else {
      $.ajax({
        type: 'POST',
        url: '/form3',
        data: {
          id: this.state.ID,
          ccnumber: this.state.creditcard,
          expiry: this.state.expirydate,
          cvv: this.state.cvv,
          billingzip: this.state.billingzip
        },
        success: (data) => {
          var parsedData = JSON.parse(data);
          this.setState({currentPage: 4, requiredShow: '', postedData: parsedData});
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
    } else if (this.state.currentPage === 3) {
      return (
        <form>
          <div>
            <label for="creditcard">Credit Card Number: (Required)  </label>
            <input type="text" name="creditcard" id="creditcard" required onChange={this.handleChange.bind(this)}></input>
          </div>
          <div>
            <label for="expirydate">Expiry Date (Required):  </label>
            <input type="text" name="expirydate" id="expirydate"
              required onChange={this.handleChange.bind(this)}></input>
          </div>
          <div>
            <label for="cvv">CVV: (Required)  </label>
            <input type="text" name="cvv" id="cvv"
              required onChange={this.handleChange.bind(this)}></input>
          </div>
          <div>
            <label for="billingzip">Billing Zip Code: (Required)  </label>
            <input type="text" name="billingzip" id="billingzip"
              required onChange={this.handleChange.bind(this)}></input>
          </div>
          <button id="SubmitF3" type="button" onClick={this.SubmitF3.bind(this)}>Submit</button>
          <div class="required">{this.state.requiredShow}</div>
        </form>
      );
    } else if (this.state.currentPage === 4) {
      console.log(this.state);
      return (
        <div>
          <p>Name: {this.state.postedData[0].name}</p>
          <p>E-Mail Address: {this.state.postedData[0].email}</p>
          <p>Address 1: {this.state.postedData[0].address1}</p>
          <p>Address 2: {this.state.postedData[0].address2}</p>
          <p>City: {this.state.postedData[0].city}</p>
          <p>State: {this.state.postedData[0].state}</p>
          <p>Zip Code: {this.state.postedData[0].zip}</p>
          <p>Phone Number: {this.state.postedData[0].phone}</p>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('App')
);