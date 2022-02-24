import React, { Component } from 'react';
import {post} from "axios"
import Account from './Account';

class Accountdetail extends Component {

  constructor(props){
    super(props)
    this.state = {
        deposit_account_id : ''
      }
  }

  viewAccount = () => {
    const url = 'api/accountdetail';
    var body = { 'deposit_account_id' : `${this.state.deposit_account_id}`};
    console.log(body);
    return post(url ,body);
  }

  state = {
    response :"",  
    deposit_account_id : "",
    deposit_account_balance : "",
    deposit_account_type : "",
    card_application_status : "",
    opening_date :""
  }

  handleFormSubmit = (e) => {
      e.preventDefault()
      this.viewAccount()
        .then((response2) =>{
        
            //response = response2.json();
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
        <Account/>
        <h2 className="left20">거래내역 조회</h2>
              <form className = "left20" onSubmit= {this.handleFormSubmit}>   
                    계좌 ID: <input type="text" name="deposit_account_id" value ={this.state.deposit_account_id} onChange={this.hadleValueChange} requied/><br />
                    <button type="submit">조회하기</button>
              </form>
                
      </div>
    );
  }
}

export default Accountdetail;
  