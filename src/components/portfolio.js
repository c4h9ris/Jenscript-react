import React from 'react';
import Videohero from 'components/video-hero'
import PortfolioItem from 'components/portfolio-item'

class Portfolio extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row recent-work">
          <div className="col-sm-4">
            <h2>Recent Work</h2>
          </div>
          <div className="col-sm-8">
            <p>Built modular components in Django CMS for Fidelity, used across their entire international region's websites. Built a proof of concept iOS touch ID login for Fidelity's secure site in a Cordova hybrid app. Rebuilt Moonfruit's website from the ground up, bringing them into the responsive world. Worked on Moonfruit's DIY website app, migrating it from Flash to React.js. Built websites for various financial companies such as: MasterCard US and Canada, Deutsche Bank and Fidelity.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <PortfolioItem title={"Fidelity Retirement"} src={"images/retirement-fidelity-small.jpg"} srcLarge={"images/retirement-fidelity-large.jpg"} />
          </div>
          <div className="col-sm-4">
            <PortfolioItem title={"Moonfruit 2016"} src={"images/mf-old-small.jpg"} srcLarge={"images/mf-old-full.png"} />
          </div>
          <div className="col-sm-4">
            <PortfolioItem title={"Moonfruit 2017"} src={"images/mf-new-small.png"} srcLarge={"images/mf-new-large.jpg"} />
          </div>
          <div className="col-sm-4">
            <PortfolioItem title={""} src={"images/cubic-large.jpg"} srcLarge={"images/cubic-large.jpg"} />
          </div>
          <div className="col-sm-4">
            <PortfolioItem title={"MasterCard Busness Owners Toolbox"} src={"images/mbot.jpg"} srcLarge={"images/mbot-large.jpg"} />
          </div>
          <div className="col-sm-4">
            <PortfolioItem title={"MasterCard Business Network"} src={"images/mbn.jpg"} srcLarge={"images/mbn-large.jpg"} />
          </div>
          <div className="col-sm-4">
            <PortfolioItem title={"Deutsche Bank"} src={"images/deutsche-bank.jpg"} srcLarge={"images/deutsche-bank-large.jpg"} />
          </div>
          <div className="col-sm-4">
            <PortfolioItem title={"Darwin - custom component library"} src={"images/darwin.png"} srcLarge={"images/darwin.png"} />
          </div>
          <div className="col-sm-4">
            <PortfolioItem title={"Mso.net 2013"} src={"images/mso-net.jpg"} srcLarge={"images/mso-net-large.jpg"} />
          </div>
          <div className="col-sm-4">
            <PortfolioItem title={"BRDC"} src={"images/brdc.jpg"} srcLarge={"images/brdc.jpg"} />
          </div>
          <div className="col-sm-4">
            <PortfolioItem title={"Elaine Academy"} src={"images/elaine-academy.jpg"} srcLarge={"images/elaine-academy.jpg"} />
          </div>
          <div className="col-sm-4">
            <PortfolioItem title={"Chapman Creative 2013"} src={"images/chapman-creative.jpg"} srcLarge={"images/chapman-creative.jpg"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;


