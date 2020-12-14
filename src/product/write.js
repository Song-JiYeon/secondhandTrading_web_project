import React from 'react';
import { Switch, Route, withRouter } from "react-router";
import { Link } from "react-router-dom";
import axios from 'axios';

class Write extends React.Component {

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
        console.log(event.target.name.value, event.target.category.value, event.target.price.value);
        console.log("writer's id:"+this.state.id);
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/create',
            data: {
                name: event.target.name.value,
                category: event.target.category.value,
                price: event.target.price.value,
                url: event.target.url.value,
                contactInfo: event.target.contactInfo.value,
                description: event.target.description.value,
                writer: this.state.id
            }
        });
        this.props.history.goBack();
           
    }

    render(){
        return(
            <div className="contt">
                <p className="tii">게시글 작성</p>
                <form onSubmit={this.submitHandler}>
                    <div className="label">카테고리 <select name="category" className="box0">
                        <option value="의류">의류</option>
                        <option value="도서">도서</option>
                        <option value="뷰티">뷰티</option>
                        <option value="가전디지털">가전디지털</option>
                        <option value="스포츠레저">스포츠레저</option>
                        <option value="생활용품">생활용품</option>
                        <option value="반려동물용품">반려동물용품</option>
                    </select>
                    </div>
                    <div className="label">상품이름 <input type="text" name="name" placeholder="상품이름" className="box1"></input></div>
                    <div className="label">가격 <input type="text" name="price" placeholder="가격" className="box2"></input></div>
                    <div className="label">사진 url <input type="text" name="url" placeholder="사진 url" className="box3"></input></div>
                    <div className="label">연락처  <input type="text" name="contactInfo" placeholder="연락처" className="box4"></input></div>
                    <div className="label">상품설명 <textarea name="description" placeholder="상품설명" className="box5"></textarea></div>
                    <p><input type="submit" value="등록" className="button"></input></p>
                </form>
            </div>

        );
    }
}

export default withRouter(Write);