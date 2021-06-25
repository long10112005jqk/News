import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink} from "react-router-dom";
export default class menu extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
		<nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container px-4 px-lg-5">
          <Link to="/">Start Bootstrap</Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item"><NavLink to="/home" activeClassName="active">Trang Chủ</NavLink></li>
              <li className="nav-item"><NavLink to="/tin">Tin Tức</NavLink></li>
              <li className="nav-item"><NavLink to="/hotro">Hỗ Trợ</NavLink></li>     
            </ul>
          </div>
        </div>
      </nav>
		);
	}
}
