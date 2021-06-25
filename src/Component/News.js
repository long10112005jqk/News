import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink} from "react-router-dom";
import ItemsCards from './itemcards.js';
import dl from './dulieu.json';
export default class News extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
        <header className="masthead">
          <div className="container px-4 px-lg-5 h-100">
            <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-8 align-self-end">
                <h1 className="text-white font-weight-bold">Trang tin tuc</h1>
                <hr className="divider" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <a className="btn btn-primary btn-xl" href="#about">Find Out More</a>
              </div>
            </div>
          </div>
        </header>
        {/* About*/}
        {/* danh sach */}
        <div className="td mt-3 pt-3">
          <div className="container">
            <div className="row">
            {
              dl.map((value,key) => {
                return (
                  <ItemsCards key={key} td={value.td} gt={value.gt} img={value.img} id={value.id} />
                )
              })
            }

            </div>
          </div>
        </div>
      </div>
        );
    }
}
