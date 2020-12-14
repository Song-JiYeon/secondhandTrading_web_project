import React from 'react';
import { Switch, Route, withRouter } from "react-router";
import { Link } from "react-router-dom";
import axios from 'axios';

class WriteReview extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
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
                    user: this.state.no,
                    id: '',
                })
                window.alert("접근 권한이 없습니다");
                this.props.history.goBack();
               
            }
            if(this.state.user[0] !== undefined){
                this.setState({
                    id: this.state.user[0].id,
                })
            }
          
        })
    }

    submitHandler = (event) => {
        event.preventDefault();

        axios({
            method: 'post',
            url: 'http://localhost:3001/api/review/create',
            data: {
                title: event.target.title.value,
                content: event.target.content.value,
                recommend: event.target.recommend.value,
                writer: this.state.id
            }
        });
        this.props.history.goBack();
    }

    render(){
        return(
            <div className="contt">
                <p className="ti">리뷰게시글 작성</p>
                    <form onSubmit={this.submitHandler}>
                        <p className="label1">제목</p> <input type="text" name="title" placeholder="제목" className="tit"></input>
                        <p className="label1">내용</p> <textarea name="content" placeholder="내용" className="content"></textarea>
                        <br/>
                        <span className="label2">추천 <input type="radio" name="recommend" value="true" required></input></span>
                        <span className="label2">비추천<input type="radio" name="recommend" value="false" required></input></span>
                        <p><input type="submit" value="등록" className="button"></input></p>
                    </form>

            </div>
        );
    }

}

export default withRouter(WriteReview);