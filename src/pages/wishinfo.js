import React, { Component } from 'react';
import ProductInfo from '../product/productinfo';
import axios from 'axios';

class WishInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
         product: [],
        };
      }

      componentDidMount() {
        axios.get('http://localhost:3001/api/wishList')
            .then(res => {
                const product = res.data;
                this.setState({ product });
            })
        }

    render(){
        var content = null;
        console.log(this.props.state);
        console.log(this.props.id);
        if(this.props.state === false){
            content=<div>
                    <div className="m2">관심상품 목록
                    <img className="main2" src="/images/heart.png" /></div>
                    <p className="need">로그인이 필요한 페이지입니다</p>
                    </div>
        }
        else{
            content =   <div>
                        <div className="m2">관심상품 목록
                        <img className="main2" src="/images/heart.png" /></div>
                        <div className="inf">{this.state.product.map(p =>(<div key={p._id} className="info1">
                        <img className="img" src={p.url} />
                        <p>상품 이름: {p.name}</p>
                        <p>카테고리: {p.category}</p>
                        <p>가격: {p.price}원</p>
                        </div>))}</div> 
                        </div>                
                      
        }
        return(
            <div className="cont3">
                {content}
            </div>
           
        );
    }

}

export default WishInfo;