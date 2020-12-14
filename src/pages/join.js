import React from 'react';
import { Switch, Route, withRouter } from "react-router";
import axios from 'axios';

class Join extends React.Component {

    submitHandler = (event) => {
        event.preventDefault();

        axios({
            method: 'post',
            url: 'http://localhost:3001/api/join',
            data: {
                id: event.target.id.value,
                password: event.target.password.value,
            }
        });
        window.alert("회원가입 완료");
    }

    render(){
        return(
            <div className="join">
              <p className="join1">회원가입</p>
              <form onSubmit={this.submitHandler}>
                <p className="join2">ID</p>
                <input type="text" name="id" className="input"></input>
                <p className="join2">PASSWORD</p>
                <input type="password" name="password" className="input"></input>
                <p><input type="submit" value="Join" className="join3"></input></p>
              </form>
            </div>
           

        );
    }
}
export default withRouter(Join);