import React from 'react';

class AddFishForm extends React.Component{
  createFish(event){
    event.preventDefault();
    console.log("faisons du poisson");
    const fish = {
      name : this.name.value,
      price : this.price.value,
      status : this.status.value,
      desc : this.desc.value,
      image : this.image.value
    }
    console.log(fish)
    this.props.addFish(fish);
    this.fishForm.reset();  // resets the form via a ref on the form element and JS's reset.
  }

  render(){
    return(
      <form ref={(input)=> this.fishForm = input} onSubmit={(e) => this.createFish(e)} className="fish-edit">
        <input ref={(saisie) => this.name = saisie}type="text" placeholder="Fish name"/>
        <input ref={(saisie) => this.price = saisie}type="text" placeholder="Fish price"/>
        <select ref={(saisie) => this.status = saisie}>
          <option value="available" >Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea ref={(saisie) => this.desc = saisie} type="text" placeholder="Fish desc"></textarea> 
        <input ref={(saisie) => this.image = saisie}type="text" placeholder="Fish image"/> 
        <button type="submit"> + Add Item</button>
      </form>
    )
  }
}
export default AddFishForm;