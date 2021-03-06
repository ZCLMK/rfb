import React from 'react';
import { formatPrice } from '../helpers';
class Fish extends React.Component {
  render(){
    const { details } = this.props // pareil à const details = this.props.details
    return(
    <li className="menu-fish">
      {this.props.details.name}
      <img src={details.image} alt={details.name} />
      <h3 className="fish-name">{details.name}
       <span class="price">{formatPrice(details.price)}</span>
      </h3>
      <p>{details.desc}</p>
      <button>Add to Order</button>
    </li>
    )
  }
}
export default Fish;
