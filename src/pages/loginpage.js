import React from 'react';
import { Switch, Route, withRouter } from "react-router";
import axios from 'axios';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
         user: [],
         user1: [],
         no: [{
             id: "null", password: "null", state: false
         }]
        };
      }

    submitHandler = (event) => {
        event.preventDefault();

        axios.get(`http://localhost:3001/api/login/${event.target.id.value}/${event.target.password.value}`)
            .then(res => {
                const user1 = res.data;
                this.setState({
                    user: user1
                });
               

                if(this.state.user[0] === undefined){
                    window.alert("로그인 실패");
                    this.setState({
                        user: this.state.no
                    })
                   
                }
                
                else if(this.state.user[0].id === event.target.id.value){
                    window.alert("로그인 성공");
                    
                    axios({
                        method: 'post',
                        url: `http://localhost:3001/api/login/edit/${this.state.user[0]._id}`,
                        data: {
                            state: true
                        }
                    });
                    this.props.history.push('/');
                }
        })
    }

    changeMode = () => {
        console.log(this.props.num);
        axios({
            method: 'post',
            url: `http://localhost:3001/api/login/edit/${this.props.num}`,
            data: {
                state: false
            }
        });
        window.alert("로그아웃 하셨습니다");
        this.props.history.push('/');
    }

    render(){
        var content=null;
        console.log("login state:"+this.props.state);
        //if(this.props.state === false){
        if(this.props.id === ''){
            console.log("false");
            content= <div className="join">
                        <p className="join1">로그인</p>
                        <form onSubmit={this.submitHandler}>
                        <p className="join2">ID</p>
                        <input type="text" name="id" className="input"></input>
                        <p className="join2">PASSWORD</p>
                        <input type="password" name="password" className="input"></input>
                        <p><input type="submit" value="Login" className="join3"></input></p>
                        </form>
                      </div>
        }
        else{
            content= <div className="jo">
                        <p className="jo1">안녕하세요 :)</p> 
                        <p className="jo2">{this.props.id}님</p>
                        <div className="q">로그아웃 하시겠습니까?</div>
                        <button className="logout" onClick={this.changeMode}>로그아웃</button>
                     </div>
        }
        return(
            <div>
            {content}
            </div>
           

        );
    }
}
export default withRouter(LoginPage);