import React from "react";
import { Link } from "react-router-dom";
import './Account.css';


function Account() {
    return(
        <div className="accountSee">  
         
         <label for="sidebtn" class="sidebtn">
            <span>
                <button className = "accountSee">
                    <Link to="/viewaccount">계좌 조회</Link>
                </button>
            </span>
            <span>
                <button className = "accountSee" >
                    <Link to="/viewTransaction">거래내역 조회</Link>
                </button>
            </span>
        </label>
        
        </div>
    );
    
  }
  
export default Account;
  