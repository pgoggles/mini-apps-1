class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPage: 0};
  }

  render() {
    if (this.state.currentPage === 0) {
      return (
        <div>THIS IS A TEST PAGE</div>
      );
    } else {
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