import React from 'react';
import { Switch, Route, withRouter } from "react-router";
import { Link } from "react-router-dom";
import axios from 'axios';

class ReviewInfo extends React.Component {

    deleteReview= (event) => {
        event.preventDefault();

        let body = {
            id: this.props.id
        }
        
        axios({
            method: 'post',
            url: `http://localhost:3001/api/review/delete/${this.props.id}`,
            data: {
                id: this.props.id
            }
        });
        window.alert("리뷰게시글 삭제 완료");
        //this.props.history.push('/');
        this.props.history.goBack();
    }

    render(){

        console.log(this.props.recommend);
        var recommend, text, content=null;
        if(this.props.recommend === "true"){
            text= <span className="t">추천</span>
            recommend = <img className="rr" src="/images/good.png" />
        }
        else if(this.props.recommend === "false"){
            text= <span className="t">비추천</span>
            recommend = <img className="rr" src="/images/bad.png" />
        }

        if(this.props.user === this.props.writer){
            content = <button className="rd" onClick={this.deleteReview}>삭제</button>
        }

        return(
                <ul className="review">
                    <li className="reviewList">
                        <div className="title">
                        <span>{this.props.title} </span>
                        <span className="writer">작성자: {this.props.writer}</span>
                        <div className="r">{text}{recommend}</div>
                        </div>
                        <p>{this.props.content}</p>
                        <div>{content}</div>
                    </li>
                </ul>

        );
    }
}

export default withRouter(ReviewInfo);
