import React from 'react';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">Tin tuc</h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">            
              <a className="btn btn-primary btn-xl" href="#about">Find Out More</a>
            </div>
          </div>
        </div>
      </header>
		);
	}
}
