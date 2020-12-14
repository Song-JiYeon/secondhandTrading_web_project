import React from 'react';
import { Switch, Route, withRouter } from "react-router";
import ProductWrite from './write';
import ProductInfo from './productinfo';
import { Link } from "react-router-dom";
import axios from 'axios';

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
         category: '',   
         product: [],
         product1:[],
        };
      }

    componentDidMount() {
        axios.get(`http://localhost:3001/api/product`)
            .then(res => {
                const product = res.data;
                this.setState({
                    product1: product.reverse()
                });
            })
    }
 
    render(){
        console.log(this.props.user);
        return(
            <div className="cont0">
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
                user={this.props.user}
                product={this.state.product} />))}</div>                 
            </div>

        );
    }
}

export default withRouter(Product);