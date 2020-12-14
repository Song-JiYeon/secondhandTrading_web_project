import React from 'react';
import { Switch, Route, withRouter } from "react-router";
import Product from '../product/product';
import axios from 'axios';

class Home extends React.Component {

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
    }

    render(){
        return(
            <div>
                <div className="m0">
                <img className="main3" src="/images/snowflake1.png" />
                <img className="main0" src="/images/snowflake.png" />
                실시간 상품
                <img className="main0" src="/images/snowflake.png" />
                <img className="main3" src="/images/snowflake1.png" /></div>
                <Product user={this.state.id}></Product>
            </div>
           

        );
    }
}
export default withRouter(Home);