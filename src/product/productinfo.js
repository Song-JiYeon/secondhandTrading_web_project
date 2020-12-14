import React from 'react';
import { Switch, Route, withRouter } from "react-router";
import ProductDetail from './productdetail';
import { Link } from "react-router-dom";
import axios from 'axios';

class ProductInfo extends React.Component {

    deleteProduct= (event) => {
        event.preventDefault();

        let body = {
            id: this.props.id
        }
        
        axios({
            method: 'post',
            url: `http://localhost:3001/api/product/delete/${this.props.id}`,
            data: {
                id: this.props.id
            }
        });
        this.props.history.goBack();
    }


    render(){
        var bookMark = null;
        if(this.props.liking === false){
            bookMark = <img src="/images/dislike.png" className="dislike1"/>
        }
        else if(this.props.liking === true){
            bookMark = <img src="/images/like.png" className="like2"/>
        }

        return(
            <div className="info">
                <img className="img" src={this.props.url} />
                <p>상품 이름: {this.props.name}</p>
                <p>카테고리: {this.props.category}</p>
                <p>가격: {this.props.price}원</p>
                <Link className="dt" to={{
                pathname: `/product/detail/${this.props.id}`,
                    state: {
                        id:this.props.id,
                        name:this.props.name,
                        category:this.props.category,
                        price:this.props.price,
                        url:this.props.url,
                        contactInfo:this.props.contactInfo,
                        description:this.props.description,
                        liking: this.props.liking,
                        writer: this.props.writer,
                        user: this.props.user,
                    }
                }}>
                -> 상세 페이지</Link>
                {bookMark}
            </div>

        );
    }
}
export default withRouter(ProductInfo);