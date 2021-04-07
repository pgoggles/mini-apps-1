class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPage: 0};
  }

  checkoutZero() {
    this.setState({currentPage: 1});
    console.log(this);
  }

  render() {
    if (this.state.currentPage === 0) {
      return (
        <button id="Checkout" type="button" onClick={this.checkoutZero.bind(this)}>Checkout</button>
      );
    } else if (this.state.currentPage === 1) {
      return (
        <div>THIS IS A SECOND TEST PAGE</div>
      );
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('App')
);