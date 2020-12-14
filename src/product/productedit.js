import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router";
import { Link } from "react-router-dom";
import axios from 'axios';

class ProductEdit extends Component{

    constructor(props){
        super(props);

        this.state={
            name: this.props.location.state.name,
            category: this.props.location.state.category,
            price: this.props.location.state.price,
            url: this.props.location.state.url,
            contactInfo: this.props.location.state.contactInfo,
            description: this.props.location.state.description,
        }
    }

    submit = (event) =>{
        event.preventDefault();
        axios({
            method: 'post',
            url: `http://localhost:3001/api/product/edit/${this.props.location.state.id}`,
            data: {
                name: event.target.name.value,
                category: event.target.category.value,
                price: event.target.price.value,
                url: event.target.url.value,
                contactInfo: event.target.contactInfo.value,
                description: event.target.description.value,
            }
        });
        this.props.history.goBack();
        this.props.history.goBack();
    }
    render(){
        return(
             <div className="contt">
             <p>게시글 편집</p>
             <form onSubmit={this.submit}>
                    <div className="label">카테고리 <select name="category" className="box0">
                        <option value="의류">의류</option>
                        <option value="도서">도서</option>
                        <option value="뷰티">뷰티</option>
                        <option value="가전디지털">가전디지털</option>
                        <option value="스포츠레저">스포츠레저</option>
                        <option value="생활용품">생활용품</option>
                        <option value="반려동물용품">반려동물용품</option>
                    </select>
                    </div>
                    <div className="label">상품이름 <input type="text" name="name" placeholder={this.state.name} className="box1"></input></div>
                    <div className="label">가격 <input type="text" name="price" placeholder={this.state.price} className="box2"></input></div>
                    <div className="label">사진 url <input type="text" name="url" placeholder={this.state.url} className="box3"></input></div>
                    <div className="label">연락처  <input type="text" name="contactInfo" placeholder={this.state.contactInfo} className="box4"></input></div>
                    <div className="label">상품설명 <textarea name="description" placeholder={this.state.description} className="box5"></textarea></div>
                 <p><input type="submit" value="등록" className="button"></input></p>
             </form>
         </div>

        );
    }

}
export default withRouter(ProductEdit);