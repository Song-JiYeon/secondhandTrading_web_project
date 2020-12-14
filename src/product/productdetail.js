import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router";
import { Link } from "react-router-dom";
import axios from 'axios';

class ProductDetail extends Component{

    deleteProduct= (event) => {
        event.preventDefault();

        let body = {
            id: this.props.location.state.id
        }
        
        axios({
            method: 'post',
            url: `http://localhost:3001/api/product/delete/${this.props.location.state.id}`,
            data: {
                id: this.props.location.state.id
            }
        });
        this.props.history.goBack();
    }

    likeProduct = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: `http://localhost:3001/api/product/edit/${this.props.location.state.id}`,
            data: {
                liking: 'true'
            }
        });
        //this.props.history.goBack();
    }

    dislikeProduct = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: `http://localhost:3001/api/product/edit/${this.props.location.state.id}`,
            data: {
                liking: 'false'
            }
        });
        //this.props.history.goBack();

    }

    cancel(){
        this.props.history.goBack();
    }

    render(){
        console.log(this.props.location.state.user,this.props.location.state.writer);
        var bookMark = null;
        var heart = null;
        var content = null;
        if(this.props.location.state.liking === false && this.props.location.state.user !== ''){
            bookMark = <button className="btt1" onClick={this.likeProduct}>찜하기</button>
            heart = <img src="/images/dislike.png" className="bb"/>
        }
        if(this.props.location.state.liking === true && this.props.location.state.user !== ''){
            bookMark = <button className="btt1" onClick={this.dislikeProduct}>찜하기 취소</button>
            heart = <img src="/images/like.png" className="bb"/>
        }
        if(this.props.location.state.user === this.props.location.state.writer){
            content= <span><Link className="edit" to={{
                pathname: `/product/edit/${this.props.location.state.id}`,
                    state: {
                        id:this.props.location.state.id,
                        name:this.props.location.state.name,
                        category:this.props.location.state.category,
                        price:this.props.location.state.price,
                        url:this.props.location.state.url,
                        contactInfo:this.props.location.state.contactInfo,
                        description:this.props.location.state.description,
                    }
                }}><button className="btt">수정</button></Link>
                <button className="delete" onClick={this.deleteProduct}>삭제</button></span>
        }
        if(this.props.location.state.user !== this.props.location.state.writer){
            content = null
        }

        return(
            <div className="detail">
                <button className="button1" onClick={this.cancel.bind(this)}><img src="/images/back.png" /></button>
                <h5>상세 페이지</h5>
                <img className="img" src={this.props.location.state.url} />
                <div className="detail1">
                <p>작성자: {this.props.location.state.writer}</p>
                <p>상품 이름: {this.props.location.state.name}</p>
                <p>카테고리: {this.props.location.state.category}</p>
                <p>가격: {this.props.location.state.price}원</p>
                <p>연락처: {this.props.location.state.contactInfo}</p>
                <p>상품 설명: {this.props.location.state.description}</p>
                </div>
                {content}
                {bookMark}
                
                
            </div>

        );
    }

}
export default withRouter(ProductDetail);

