import MakeGrid from './MakeGrid.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <MakeGrid n={7} />
      </div>
    );
  }
}

export default App;