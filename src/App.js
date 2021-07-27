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
      availableSquares: 9
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
  winSequence = () => {
    const { board} = this.state

    // scan the whole board and check that there's at least one space marked
    // in that condition
    if((board[0] === board[1] && board[0] === board[2] && board[0] !== "")
      || (board[3] === board[4] && board[3] === board[5] && board[3] !== "")
      || (board[6] === board[7] && board[6] === board[8] && board[6] !== "")
      || (board[0] === board[3] && board[0] === board[6] && board[0] !== "")
      || (board[1] === board[4] && board[1] === board[7] && board[1] !== "")
      || (board[2] === board[5] && board[2] === board[8] && board[2] !== "")
      || (board[0] === board[4] && board[0] === board[8] && board[0] !== "")
      || (board[2] === board[4] && board[2] === board[6] && board[2] !== "")
      ){ 
        return true
      } else {
        return false
      }
      
  }

    restart =

  markSquare = (player, i) => {
    const { board, availableSquares} = this.state

    let square = board[i]
    if(square === ""){
      board[i] = player
      this.setState({
      availableSquares: this.state.availableSquares -1

      })

      // Checks if the player won
      if (this.winSequence()) {
        this.setState({gameStatus: false})
        console.log(this.state.gameStatus)
        console.log("someone won!!!!")
      } else {
        // Only change the player if a square was marked and gameStatus is true
        this.setState({
          player1: !this.state.player1,
        })
      }
    }
  }

  handleGamePlay = (val, index) => {
    const { board, player1, gameStatus, availableSquares } = this.state
    
    // Mark the square with the player's mark if gameStatus is true
    if (!gameStatus) {
      return
    }
     else if(player1) {
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

        {this.state.player1 && !this.state.gameStatus && <h4>Player 1 won!</h4>}
        {!this.state.player1 && !this.state.gameStatus && <h4>Player 2 won!</h4>}
        {this.state.availableSquares === 0 && <h4>StaleMate!</h4>}

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
