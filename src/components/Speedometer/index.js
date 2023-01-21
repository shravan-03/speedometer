import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onSpeed = () => {
    this.setState(prevState => ({speed: prevState.speed + 10}))
  }

  onBrake = () => {
    this.setState(prevState => ({speed: prevState.speed - 10}))
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="img"
          alt="speedometer"
        />
        <div className="content">
          <h1 className="heading">Speed is {speed}mph</h1>
          <p className="para">Min limit is 0mph. Max limit is 200</p>
          <div className="buttons">
            <button type="button" className="btn1" onClick={this.onSpeed}>
              Accelerate
            </button>
            <button type="button" className="btn2" onClick={this.onBrake}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
