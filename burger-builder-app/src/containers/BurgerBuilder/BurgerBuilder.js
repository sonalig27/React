import React, {Component} from "react"
import Auxilary from "../../hoc/Auxilary"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"

class BurgerBuilder extends Component {
  state = {
    ingredients :{
      salad : 0,
      bacon : 0,
      cheese : 0,
      meat : 0
    }
  }
  render() {
    return (
      <Auxilary>
        <Burger ingredients = {this.state.ingredients}/>
        <BuildControls/>
      </Auxilary>
    )
    
};
}

export default BurgerBuilder;
