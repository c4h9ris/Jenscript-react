import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'
class PortfolioItem extends Component {

	constructor(props) {
		super(props)

		this.handleShow = this.handleShow.bind(this);
   		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false
		}
	}

	handleClose() {
	    this.setState({ show: false });
	}

	handleShow() {
	    this.setState({ show: true });
	}

	render () {
		return (
			<div>
				<a href="javascript:void(0);" onClick={this.handleShow}><img className="img-responsive" src={this.props.src} alt="moonfruit homepage" /></a>
				<div className="static-modal">
					<Modal show={this.state.show} onHide={this.handleClose}>
						<Modal.Header>
							<Modal.Title>{this.props.title}</Modal.Title>
						</Modal.Header>

						<Modal.Body>
							<img className="img-responsive" src={this.props.srcLarge} alt="moonfruit homepage" />
						</Modal.Body>

						<Modal.Footer>
							<Button onClick={this.handleClose}>Close</Button>
						</Modal.Footer>
				  </Modal>
				</div>
			</div>
		)
	}
}

export default PortfolioItem