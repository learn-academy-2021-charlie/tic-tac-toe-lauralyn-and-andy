import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["", "", "", "", "", "", "", "", ""],
      player1: true,
      gameStatus: true,
       
    }
  }

  /*
  winning conditions:
  horizontal:
  1) 0, 1, 2
  2) 3, 4, 5
  3) 6, 7, 8
  vertical:
  4) 0, 3, 6
  5) 1, 4, 7
  6) 2, 5, 8
  diagonal:
  7) 0, 4, 8
  8) 2, 4, 6
  */
  markSquare = (player, i) => {
    const { board} = this.state

    let square = board[i]
    if(square === ""){
      board[i] = player
      this.setState({
        player1: !this.state.player1
      })
    }
  }

  handleGamePlay = (val, index) => {
    const { board,player1 } = this.state
    if(player1){
      this.markSquare("X",index) 
    } else{
      this.markSquare("O",index) 
    }


    this.setState({
      board: board


      
    })
  }

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>

        <div id="gameboard">
          {this.state.board.map((val, idx) => {
            return(
              <Square
                key={idx}
                value={val}
                index={idx}
                handleGamePlay={this.handleGamePlay}
              />
            )
          })}
        </div>
      </>
    )
  }
}
export default App
