import './App.css';
import HandCard from './components/HandCard';
import MonsterZone from './components/MonsterZone';
import { cards, characters } from "./data/data"


function App() {

  function generateRandomSet(set, count) {
    var result = []
    for (let i = 0; i < count; i++) {

      var randomnum = Math.floor(Math.random() * set.length)
      result.push(set[randomnum])
    }
    return result
  }

var characters1 = generateRandomSet(characters, 4)
var characters2 = generateRandomSet(characters, 4)

var cards1 = generateRandomSet(cards, 5)
var cards2 = generateRandomSet(cards, 5)

  return (
    <div className="App">
      <h1>yugioh card game</h1>
      <HandCard num={1} cards={cards1}/>
      <MonsterZone num={1} characters={characters1}/>
      <MonsterZone num={2} characters={characters2}/>
      <HandCard num={2} cards={cards2}/>
    </div>
  );
}

export default App;
