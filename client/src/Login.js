
import React, { Component } from 'react';
import {post} from "axios"


class Login extends Component {

      constructor(props){
        super(props)
        this.state = {
            name : '',
            client_registration_number : ''
          }
      }
    
      viewMypage = () => {
        const url = 'api/mypage';
        var body = { 'client_registration_number' : `${this.state.client_registration_number}`};
        console.log(body);      
        return post(url ,body);
      }
    
    
    
    
      state = {
        client_name : "",
        client_address : "",
        date_of_birth : "",
        client_email : "",
        client_phonenumber :"",
        client_job: ""
      }
    

      handleFormSubmit = (e) => {
          e.preventDefault()
          this.viewMypage()
            .then((response2) =>{
              console.log(response2.data);
              console.log(response2.data[0]);
              this.setState({
                  client_name: response2.data[0].client_name,
                  client_address : response2.data[0].client_address,
                  date_of_birth : response2.data[0].date_of_birth,
                  client_email : response2.data[0].client_email,
                  client_phonenumber : response2.data[0].client_phonenumber,
                  client_job : response2.data[0].client_job,  
              })
            })
      }
    
      hadleValueChange = (e) =>{
        let nextState = {} ;
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
      }
     
    
      render(){
        return  (
          <div className = "fromleft">
            <h2 className="left20">로그인</h2>
                  <form className = "left20" onSubmit= {this.handleFormSubmit}>   
                        주민등록번호 : <input type="text" name="client_registration_number" value ={this.state.client_registration_number} onChange={this.hadleValueChange} requied/><br />
                        <button type="submit">조회하기</button>
                  </form>
                <p className="left20">고객명 : {this.state.client_name ? this.state.client_name : ""}</p>
                <p className="left20">고객 주소 : {this.state.client_address ? this.state.client_address : ""}</p>
                <p className="left20">고객 생년월일 : {this.state.date_of_birth ? this.state.date_of_birth : ""}</p>
                <p className="left20">고객 이메일 : {this.state.client_email ? this.state.client_email : ""}</p>
                <p className="left20">고객 전화번호 : {this.state.client_phonenumber ? this.state.client_phonenumber : ""}</p>
                <p className="left20">고객 직업 : {this.state.client_job ? this.state.client_job : ""}</p>
        
          </div>
        );
      }
    }
    
    export default Login;
      