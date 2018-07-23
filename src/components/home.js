import React from 'react';
import Videohero from 'components/video-hero'
import Portfolio from 'components/portfolio'
import Contact from 'components/contact'
import scrollToComponent from 'react-scroll-to-component'

class Home extends React.Component {
  render() {
    return (
      <div className="home-page" ref={(section) => { this.Home = section; }}>
        <div className="homepage-hero-module">
	        <div className="video-container">
	          <div className="filter"></div>
	          <video autoPlay loop className="fillWidth hidden-xs">
	            <source src="images/New-York-Sky.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
	            <source src="images/New-York-Sky.mp4" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
	          </video>
	          <div className="poster hidden">
	            <img src="images/New-York-Sky.jpg" alt="New York Sky" />
	          </div>
	          <div className="header">
	            <nav className="navbar navbar-default">
	              <div className="container">
	                <div className="" id="bs-example-navbar-collapse-1">
	                  <ul className="nav navbar-nav">
	                    <li>
	                      <a href="#">
	                        <h1>Jenscript</h1>
	                        <h2>Web Development</h2>
	                      </a>
	                    </li>
	                  </ul>
	                  <ul className="hidden-xs pull-right nav navbar-nav">
	                    <li><a onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'top', ease: 'inOutQuad', duration: 1000})}>Home</a></li>
	                    <li><a onClick={() => scrollToComponent(this.Portfolio, { offset: 0, align: 'top', ease: 'inOutQuad', duration: 1000})}>Portfolio</a></li>
	                    <li><a onClick={() => scrollToComponent(this.Contact, { offset: 0, align: 'top', ease: 'inOutQuad', duration: 1000})}>Contact</a></li>
	                  </ul>
	                </div>
	              </div>
	            </nav>
	          </div>

	          <div className="container">
	            <div className="row">
	              <div className="landing-cta col-xs-12 text-center">
	                <h1>Web Development</h1>
	                <h2>Producing high quality responsive websites and exceptional user interfaces</h2>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
          <section className="portfolio" ref={(section) => { this.Portfolio = section; }}>
      		<Portfolio />
      	  </section>
      	  <section className="contact" ref={(section) => { this.Contact = section; }}>
      	  	<Contact />
      	  </section>
      </div>
    );
  }
}

export default Home;