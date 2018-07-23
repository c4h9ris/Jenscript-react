import React from 'react';

class Contact extends React.Component {
  render() {
    return (
	    <section className="contact" ref={(section) => { this.Contact = section; }}>
	    	<div className="container">
			    <div className="row">
			        <div className="col-md-3"></div>
			        <div className="col-md-6 text-center">
			            <h2>
			                Lets build something together!
			            </h2>
			            <a className="btn btn-primary" href="mailto:ichrisjjenkins@gmail.com">Email Me</a>
			        </div>
			    </div>
			</div>
		</section>
    );
  }
}

export default Contact;