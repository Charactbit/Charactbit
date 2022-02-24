import React, { Component } from 'react';
import Card from "./Card";
import './card.css';
import {post} from "axios"



class Viewcard extends Component {

  constructor(props){
    super(props)
    this.state = {
        card_id : ''
      }
  }

  viewCard = () => {
    const url = 'api/viewcard2';
    var body = { 'cardId' : `${this.state.card_id}`};
    console.log(body);  
    return post(url ,body);
  }

  state = {
    card : "",
    cardId : "",
    application_date : "",
    card_limit : "",
    card_type : "",
    client_registration_number2 :""
  }


  componentDidMount(){
    this.callApi()
      .then(res => this.setState({card :res}))
      .catch(err => console.log(err));
  }

  callApi = async () =>{
    const response = await fetch('/api/viewcard');
    const body = await response.json();
    //console.log(response);
    return body;
  }

  handleFormSubmit = (e) => {
      e.preventDefault()
      this.viewCard()
        .then((response2) =>{
          console.log(response2.data);
          console.log(response2.data[0].card_id);
          this.setState({
            cardId: response2.data[0].card_id,
            application_date : response2.data[0].application_date,
            card_type : response2.data[0].card_type,
            card_limit : response2.data[0].card_limit,
            payment_date : response2.data[0].payment_date
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
        <Card/>
        <h2 className="left20">카드 조회</h2>
              <form className = "left20" onSubmit= {this.handleFormSubmit}>   
                    카드 ID: <input type="text" name="card_id" value ={this.state.card_id} onChange={this.hadleValueChange} requied/><br />
                    <button type="submit">조회하기</button>
              </form>
            <p className="left20">카드 ID : {this.state.cardId ? this.state.cardId : ""}</p>
            <p className="left20">카드 신청일자 : {this.state.application_date ? this.state.application_date : ""}</p>
            <p className="left20">카드 종류 : {this.state.card_type ? this.state.card_type : ""}</p>
            <p className="left20">카드 한도 : {this.state.card_limit ? this.state.card_limit : ""}</p>
            <p className="left20">카드 결제일자 : {this.state.payment_date ? this.state.payment_date : ""}</p>
    
      </div>
    );
  }
}

export default Viewcard;
  