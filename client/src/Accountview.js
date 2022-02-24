import React, { Component } from 'react';
import {post} from "axios"
import Account from './Account';

class Accountview extends Component {

  constructor(props){
    super(props)
    this.state = {
        deposit_account_id : ''
      }
  }

  viewAccount = () => {
    const url = 'api/accountview';
    var body = { 'deposit_account_id' : `${this.state.deposit_account_id}`};
    console.log(body);
    return post(url ,body);
  }

  state = {
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
          console.log(response2.data);
          console.log(response2.data[0].deposit_account_id);
          this.setState({
            deposit_account_id: response2.data[0].deposit_account_id,
            deposit_account_balance : response2.data[0].deposit_account_balance,
            deposit_account_type : response2.data[0].deposit_account_type,
            card_application_status : response2.data[0].card_application_status,
            opening_date : response2.data[0].opening_date
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
        <Account/>
        <h2 className="left20">계좌 조회</h2>
              <form className = "left20" onSubmit= {this.handleFormSubmit}>   
                    계좌 ID: <input type="text" name="deposit_account_id" value ={this.state.deposit_account_id} onChange={this.hadleValueChange} requied/><br />
                    <button type="submit">조회하기</button>
              </form>
            <p className="left20">예금계좌 ID : {this.state.deposit_account_id ? this.state.deposit_account_id : ""}</p>
            <p className="left20">예금계좌 종류 : {this.state.deposit_account_type ? this.state.deposit_account_type : ""}</p>
            <p className="left20">예금잔고 : {this.state.deposit_account_balance ? this.state.deposit_account_balance : ""}</p>
            <p className="left20">카드 신청여부 : {this.state.card_application_status ? this.state.card_application_status : ""}</p>
            <p className="left20">예금 개설일자 : {this.state.opening_date ? this.state.opening_date : ""}</p>
    
      </div>
    );
  }
}

export default Accountview;
  