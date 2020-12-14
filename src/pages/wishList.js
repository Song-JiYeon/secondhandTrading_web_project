import React, { Component } from 'react';
import ProductInfo from '../product/productinfo';
import axios from 'axios';
import WishInfo from './wishinfo';

class WishList extends Component {

    constructor(props) {
        super(props);

        this.state = {
         user: [{id: "null", password: "null", state: false}],
         user1: [],
         no: [],
         num: 0,
         id: '',
         st: ''
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
                user: this.state.no,
                num: 0,
                id: '',
                st: false
            })
            window.alert("접근 권한이 없습니다");
           
        }
        if(this.state.user[0] !== undefined){
            this.setState({
                num: this.state.user[0]._id,
                id: this.state.user[0].id,
                st: this.state.user[0].state
            })
        }
    })
    }

    render(){
        return(
            <div>
                <WishInfo state={this.state.st} id={this.state.id}></WishInfo>
            </div>
        );
    }

}

export default WishList;