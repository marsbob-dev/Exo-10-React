import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    paragraphe: "du lorem ipsum"
  }
onClick = (e) => {
  e.target.innerHTML = "Titre 1"
}
changeParagraphe = () => {
  this.setState({paragraphe: "Mon paragraphe est changé"})
}
render () {

    return (
      <div className="App">
        <h1 onClick={this.onClick}>Titre par défaut</h1>
        <p>{this.state.paragraphe}</p>
        <button onClick={this.changeParagraphe}>Changer P</button>
      </div>
    )
  }
  }

export default App;
