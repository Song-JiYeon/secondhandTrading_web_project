import React from 'react';
import { Switch, Route, withRouter } from "react-router";
import { Link } from "react-router-dom";
import axios from 'axios';
import ReviewInfo from './reviewinfo';

class Review extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
         review: [],   
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
        axios.get('http://localhost:3001/api/review')
          .then(res => this.setState({ review: res.data }))
    }

    render(){
        var result = null;
        result = this.state.review.map(r => <li key={r._id} className="reviewList">
        
        </li>)

        return(
            <div className="cont">
                <Link className="rbt" to='/review/write'>게시글 작성</Link>
                <div className="m1">중고거래 리뷰 목록
                <img className="main1" src="/images/chat.png" /></div>
                <div>{this.state.review.map(r => <ReviewInfo
                key={r._id}
                id={r._id}
                title={r.title}
                content={r.content}
                url={r.url}
                recommend={r.recommend}
                writer={r.writer}
                user={this.state.id}
                >
                </ReviewInfo>)}</div>
            </div>

        );
    }
}

export default withRouter(Review);
