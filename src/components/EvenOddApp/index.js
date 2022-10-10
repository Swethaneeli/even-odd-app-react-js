// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrementClicked = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 100),
    }))
  }

  evenOdd = () => {
    const {count} = this.state

    return count % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {count} = this.state
    const text = this.evenOdd()
    return (
      <div className="main-container">
        <div className="count-container">
          <h1 className="count-heading">Count {count}</h1>
          <p className="even-odd">Count is {text}</p>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.onIncrementClicked}
            >
              Increment
            </button>
          </div>
          <p className="content">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
