import React from 'react';

export default class Footer extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer className="bg-light py-5">
        <div className="container px-4 px-lg-5"><div className="small text-center text-muted">Copyright © 2021 - Company Name</div></div>
      </footer>
		);
	}
}
