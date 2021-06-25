import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
export default class Contact extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      tt: false
    } 
	}

  click = (event) => {
    event.preventDefault();
    this.setState({
      tt: true
    })
  } 
  isChange = (event) => {
    const ten = event.target.name;
    const gt = event.target.value;
    this.setState({
      [ten]: gt
    })
  } 
  showdl = () => {
    var dulieu="";
    dulieu += "/chi so " + this.state.ten;
    dulieu += "/chi so " + this.state.email;
    dulieu += "/chi so " + this.state.phone;
    dulieu += "/chi so " + this.state.note;
    dulieu += "/chi so " + this.state.anh;
    // dulieu += "/chi so " + this.state.selec;
    return dulieu;
  }
  isfilechange = (event) => {
    event.preventDefault();
    console.log(event.target.files[0].name);
    const tenanh = event.target.files[0].name;
    this.setState({
      anh:tenanh
    })
  } 
	render() {
    if (this.state.tt) 
    {
      console.log(this.showdl());
      return <Redirect to="/" />;
    }
		return (
			<div>
        <header className="masthead">
          <div className="container px-4 px-lg-5 h-100">
            <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-8 align-self-end">
                <h1 className="text-white font-weight-bold">Hỗ Trợ</h1>
                <hr className="divider" />
              </div>
              <div className="col-lg-8 align-self-baseline">            
                <a className="btn btn-primary btn-xl" href="#about">Find Out More</a>
              </div>
            </div>
          </div>
        </header>
        <div className="container mt-5">   
          <h2 className="text-sm-center">Form Hỗ Trợ</h2>       
          <form className="mb-5" method="post" action="/">
            <fieldset className="form-group">
              <label htmlFor="formGroupExampleInput">Name</label>
              <input type="text" onChange={() => this.isChange(event)} className="form-control" name="ten"  placeholder="Example input" />
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="formGroupExampleInput2">Email</label>
              <input type="text" onChange={() => this.isChange(event)} className="form-control"   name="email" placeholder="Example input" />
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="formGroupExampleInput">Phone</label>
              <input type="text" onChange={() => this.isChange(event)} className="form-control" name="phone"  placeholder="Example input" />
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="formGroupExampleInput2">Ghi Chu</label>
              <input type="text" onChange={() => this.isChange(event)} className="form-control" name="note" placeholder="Example input" style={{height: '80px'}} />
            </fieldset>
            <select className="custom-select custom-select-sm" name="selec" onChange={() => this.isChange(event)}>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="custom-file" onChange={() => this.isfilechange(event)} name="file">
              <input type="file" className="custom-file-input"  />
              <label className="custom-file-label" >Choose file</label>
            </div>
            <button className="btn btn-info w-100" onClick={(event) => this.click(event)}>Gui len</button>
          </form>

        </div>
      </div>
		);
	}
}
