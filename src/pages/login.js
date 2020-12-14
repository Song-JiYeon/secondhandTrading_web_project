import React from 'react';
import { Switch, Route, withRouter } from "react-router";
import axios from 'axios';
import LoginPage from './loginpage';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
         user: [{id: "null", password: "null", state: false}],
         user1: [],
         no: [],
         num: 0,
         id: '',
         pw: '',
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
                    pw: '',
                    st: false
                })
               
            }
            if(this.state.user[0] !== undefined){
                this.setState({
                    num: this.state.user[0]._id,
                    id: this.state.user[0].id,
                    pw: this.state.user[0].password,
                    st: this.state.user[0].state
                })
            }
        })
    }
    render(){
        return(
            <div>
                <LoginPage state={this.state.st} id={this.state.id} num={this.state.num}></LoginPage>
            </div>
           

        );
    }
}
export default withRouter(Login);