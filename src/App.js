import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import './App.css';
import Menu from './Component/menu.js';
import Header from './Component/Header.js';
import Footer from './Component/Footer.js';
import News from './Component/News.js';
import Contact from './Component/Contact.js';
import Chitiet from './Component/chitiet.js';
import Dieuhuong from './router/dieuhuong.js';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
        
          <Menu />
          <Dieuhuong />
          <Footer />
          
        </div>
      </Router>
    )
  }
}


export default App;
