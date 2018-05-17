import React from 'react';
import { getFunName } from '../helpers';
class StorePicker extends React.Component{
  
  goToStore(e) {
    e.preventDefault();
    // Grab the text from the box
      console.log('you changed the url');
      console.log(this);
    }
 
  
    // Transition to /store/storeid


  render(){
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please enter a store: </h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()}
        ref={(input)=>{this.storeInfo=input}}/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;