// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="count-container">
          <h1 className="count-heading">Count 0</h1>
          <p className="even-odd">Count is Even</p>
          <div>
            <button className="button" type="button">
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
