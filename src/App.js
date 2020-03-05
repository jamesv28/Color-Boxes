import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalette} from './colorHelpers';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Palette Component</h1>} />
        <route exact path='/palette/:id' />
      </Switch>
      // <div className="App">
      //   <Palette palette={generatePalette(seedColors[4]) } />
      // </div>
    )
  } 
}

export default App;
