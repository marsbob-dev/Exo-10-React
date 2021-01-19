import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    paragraphe: "du lorem ipsum",
    titre: "Titre 2",
    paragraphe2: "Je suis le second paragraphe"
  }
  onClick = (e) => {
    e.target.innerHTML = "Titre 1"
  }
  changeParagraphe = () => {
    this.setState({
      paragraphe: "Mon paragraphe est changé"
    })
  }
  changeViaInput = (e) => {
    this.setState({
      paragraphe2: e.target.value
    })
  }
  changeViaBtn = (e) => {
    let input = document.getElementById("inputTitre")
    this.setState({
      titre: input.value
    })
  }

  render () {

    return (
      <div className="App">
        <h1 onClick={this.onClick}>Titre par défaut</h1>
        <h2>{this.state.titre}</h2>
        <input id="inputTitre" type="text"/>
        <button onClick={this.changeViaBtn}>changer titre </button>
        <p>{this.state.paragraphe}</p>
        <button onClick={this.changeParagraphe}>Changer P</button>
        <p>{this.state.paragraphe2}</p>
        <input onInput={this.changeViaInput} type="text"/>
        
      </div>
    )
  }
}

export default App;
