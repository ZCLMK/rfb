import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      fishes: {},
      order:{}
    }
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
  }

    addFish(fish){
      // copier l'objet state
      const fishes = {...this.state.fishes};
      // ajouter notre poisson à state
      const timestamp = Date.now();
      fishes[`fish-${timestamp}`] = fish; // ajouter un index unique à un objet?
      // redéfinir state
      this.setState({fishes}) // équivaut à {fishes: fishes}
    }
    loadSamples(){
      this.setState({
        fishes:sampleFishes
      });
    }
    render(){
      return(
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Some Crazy Tagline" gender='inbetWeener'/>
            <ul className="list-of-fishes">
              {Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key} details={this.state.fishes[key]}/>) 
              }
              {/* each Fish component has all the fish's details as its 'details' property */}
            </ul>
          </div>
          <Order/>
          <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/> 
          {/* maintenant, inventory compte addFish parmi ses **props** */}
        </div>
      )
    }
}
export default App;