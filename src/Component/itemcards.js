import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
export default class itemcards extends React.Component {


	constructor(props) {
		super(props);
	}
	slug = (str) => {
		// Chuyển hết sang chữ thường
	    str = str.toLowerCase();     
	 
	    // xóa dấu
	    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
	    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
	    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
	    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
	    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
	    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
	    str = str.replace(/(đ)/g, 'd');
	 
	    // Xóa ký tự đặc biệt
	    str = str.replace(/([^0-9a-z-\s])/g, '');
	 
	    // Xóa khoảng trắng thay bằng ký tự -
	    str = str.replace(/(\s+)/g, '-');
	 
	    // xóa phần dự - ở đầu
	    str = str.replace(/^-+/g, '');
	 
	    // xóa phần dư - ở cuối
	    str = str.replace(/-+$/g, '');
	 
	    // return
	    return str;
	} 
	render() {
		return (
			<div className="col-sm-4">
            <div className="card text-center">
              <a href={"/chitiet/" + this.slug(this.props.td) + "." + this.props.id}><img className="card-img-top img-fluid" src={this.props.img} alt="Card image cap" /></a>
              <div className="card-body">
                <h4 className="card-title">{this.props.td}</h4>
                <p className="card-text">{this.props.gt}</p>
                <Link to="/chitiet">Chi Tiết</Link>
              </div>
            </div>
          </div>
		);
	}
}
