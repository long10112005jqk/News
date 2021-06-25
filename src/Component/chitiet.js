import React from 'react';
import dl from './dulieu.json';
export default class chitiet extends React.Component {


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
                <h1 className="text-white font-weight-bold">Trang chi tiet</h1>
                <hr className="divider" />
              </div>
              <div className="col-lg-8 align-self-baseline">            
                <a className="btn btn-primary btn-xl" href="#about">Find Out More</a>
              </div>
            </div>
          </div>
        </header>

        {
          dl.map((value,key) => {
            if (value.id == this.props.match.params.id)
            {
            return (                      
              <div className="nd">
                <div className="container pt-5" key={key}>
                  <div className="jumbotron text-sm-center">
                    <img src={value.img} style={{width: '100%', height: '400px'}} />
                    <h1 className="display-3">{value.td}</h1>
                    <p className="lead">{value.gt}</p>
                    <hr className="m-y-md" />   
                    <p className="lead">
                      <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
                  </div>
                </div>
            </div>
             )
            }
          }) 
        }
         

          <div className="container">
            <div className="input-group">
              <input type="text" className="form-control" aria-describedby="basic-addon1" />
            </div>
            <h1 className="mt-5 text-sm-center">San pham lien quan</h1>
            <div className="row mt-5">
            {
              dl.map((value,key) => {
                if (value.id != this.props.match.params.id) 
                {
                  return (
                    <div className="col-sm-3" key={key}>
                  <div className="card text-center" >
                    <img className="card-img-top img-fluid" src={value.img} alt="Card image cap" />
                    <div className="card-body">
                      <h4 className="card-title">{value.td}</h4>
                      <p className="card-text">{value.gt}</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                  )
                }
                
              })
            }
              

            </div>
          </div>
        </div>
		);
	}
}
