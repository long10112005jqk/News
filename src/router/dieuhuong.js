import React,{Component} from 'react';

import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import News from './../Component/News.js';
import Header from './../Component/Header.js';
import Contact from './../Component/Contact.js';
import Chitiet from './../Component/chitiet.js';
 class dieuhuong extends React.Component {

	render() {
		return (
			<div>	    					   
	          <Route exact path="/" component={Header} />
	          <Route exact path="/home" component={Header} />
	          <Route exact path="/tin" component={News} />			           			        
	          <Route exact path="/hotro" component={Contact} />			           			        
	          <Route exact path="/chitiet/:slug.:id" component={Chitiet} />			           			        
		    </div>        
		);
	}
}
export default dieuhuong;