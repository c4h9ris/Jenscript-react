import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import scrollToComponent from 'react-scroll-to-component'

class Videohero extends Component {

  constructor () {
    super()
    this.state = {}
  }

  componentDidMount() {
    scrollToComponent(this.Home, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }

  render () {
    
    return (
      <div>
        <div className="filter"></div>
        <video autoPlay loop className="fillWidth hidden-xs">
          <source src={this.props.videoMp4} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
          <source src={this.props.videoWebm} type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
      </div>
    )
  }

}

export default Videohero
