import React, { Component } from 'react'

class MarkerOptions extends Component{
  
  handleClick = (marker) => {
    this.props.marker(marker)
  }
  
  render(){
    return(
      <>
        <div id="markers">
          <h4>Pick player's marker</h4>
          <button onClick={() => this.handleClick('X')}>
            X
          </button>
          <button onClick={() => this.handleClick('O')}>
            O
          </button>
        </div>
      </>
    )
  }
}
export default MarkerOptions
