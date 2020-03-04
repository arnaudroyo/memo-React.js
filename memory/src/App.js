import React, { Component } from 'react'
import './App.css'

import GuessCount from './GuessCount'
import Card from './Card'

class App extends Component {
  render() {
    return (
      <div className="memory">
       <GuessCount guesses={0} />
       <Card card="?" feedback="hidden"/>
       <Card card="£" feedback="justMatched"/>
       <Card card="@" feedback="justMismatched"/>
       <Card card="¤" feedback="visible"/>
       <Card card="§" feedback="hidden"/>
       <Card card="*" feedback="justeMatched"/>
     </div>
    )
  }
}

export default App