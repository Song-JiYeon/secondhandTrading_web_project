import React from 'react';
import { Switch, Route, withRouter } from "react-router";
import ProductWrite from '../product/write';
import ProductInfo from '../product/productinfo';
import { Link } from "react-router-dom";
import axios from 'axios';

class Product extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
         category: '',   
         product: [],
         product1:[],
         user: [{id: "null", password: "null", state: false}],
         user1: [],
         no: [],
         id: '',
        };
      }

    componentDidMount() {
        axios.get(`http://localhost:3001/api/login`)
        .then(res => {
        console.log(res.data);
        const user1 = res.data;
        this.setState({
            user: user1,
        });
        if(this.state.user[0] === undefined){
            this.setState({
                id: '',
            })
        }
        else if(this.state.user[0] !== undefined){
            this.setState({
                id: this.state.user[0].id,
            })
        }
        console.log(this.state.id);
    })
        axios.get(`http://localhost:3001/api/product`)
            .then(res => {
                const product = res.data;
                this.setState({
                    product1: product.filter(p => p.category === this.props.location.state.category)
                });
            })
    }
 
    render(){

        return(
            <div className="cont">
            <Link className="bt" to='/product/write'>게시글 작성</Link>
            <span className="cname">- 반려동물용품 중고물품 -</span>
            <div className="inf">{this.state.product1.map(p =>(<ProductInfo 
                key={p._id}
                id={p._id}
                name={p.name} 
                category={p.category} 
                price={p.price}
                url={p.url}
                contactInfo={p.contactInfo}
                description={p.description}
                liking={p.liking}
                writer={p.writer}
                user={this.state.id}
                product={this.state.product} />))}</div>                 
            </div>

        );
    }
}

export default withRouter(Product);