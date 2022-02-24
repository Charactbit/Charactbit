import React from "react";
import Card from "./Card";
import {post} from "axios"
import './card.css';


class Newcard extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            file: null,
            card_id : '',
            deposit_account_id : '',
            client_registration_number : '',
            application_date : '',
            card_limit :'',
            payment_date : '',
            card_type : '',
            filename : ''
        }
    }

    addCard = () => {
        const url = 'api/addcard';
        const formData = new FormData();
    }

    


    render(){
        return (
            <div className = "fromleft">
                <Card/>
                <h2 className="left20">카드 발급</h2>
                <form className = "left20" onSubmit= {this.handleFormSubmit}>
                    
                    카드 종류: <input type="text" name="card_type" value ={this.state.card_type} onChange={this.hadleValueChange} requied/><br />
                    카드 한도금액: <input type="text" name="card_limit" value ={this.state.card_limit} onChange={this.hadleValueChange} requied/><br />
                    카드 결제일자: <input type="text" name="payment_date" value ={this.state.payment_date} onChange={this.hadleValueChange} requied/><br />
                    <button type="submit">발급하기</button>
                </form>
            </div>
        );
    }
}

  
  export default Newcard;
  