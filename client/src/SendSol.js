import {Link} from "react-router-dom";



import{
    Connection, 
    Transaction,
}from "@solana/web3.js" 
import base58 from "bs58";

/*
import {
    Connection,
    PublicKey,
    Transaction,
    clusterApiUrl,
    SystemProgram,
} from "@solana/web3.js";
*/


function SendSol() {

    console.log("여기서부터~");
    /*
    console.log("여기서부터~");
    const {Keypair} = require("@solana/web3.js");
    //T8ph6rZP8eDmPLpFmBDZ6ToyZybrAyJDuMZSzJyV1eeaz9ignmxMHSpWefEvaEEjznqp7mmcy2KBZcGzgpmpLtm

    let keypair = Keypair.generate();
    console.log(keypair.publicKey.toString());
    var string = new TextDecoder().decode(keypair.secretKey);
    console.log(keypair.secretKey);
    console.log("~여기까지");
    */

    /*
    const fetchData = async () =>{  //지갑연동을 하고  지갑 공개키를 얻는다.
        try {
            const network = "https://solana-mainnet.phantom.tech";
            //const connection = new Connection(network);
            //const transaction = new Transaction();
            // const { signature } = await window.solana.request({
            //     method: "signAndSendTransaction",
            //     params: {
            //          message: bs58.encode(transaction.serializeMessage()),
            //     },
            // });
            //const { signature } = await window.solana.signAndSendTransaction(transaction);
            //await connection.confirmTransaction(signature);
            console.log("success?");
            //console.log(connection);
            //console.log(transaction);
          //지갑 공개키를 기반으로 해당 지갑의 코인리스트를 얻어온다. JSON 데이터를 파싱해야함.
        } catch (error) {  //에러가 발생했을 경우 에러를 콘솔창에 출력
            console.log("fail?"+error);
            throw new Error(error);
        }
    };
    fetchData();  //fetchData 실행.
   
    */

    
    const fetchData = async () =>{  //지갑연동을 하고  지갑 공개키를 얻는다.
        try {
            const network = "https://solana-mainnet.phantom.tech";
            const connection = new Connection(network);
            const transaction = new Transaction();
        
            //const { signature } = await window.solana.signAndSendTransaction(transaction);
            //await connection.confirmTransaction(signature);
            console.log("success?");
            //console.log(connection);
            //console.log(transaction);
          //지갑 공개키를 기반으로 해당 지갑의 코인리스트를 얻어온다. JSON 데이터를 파싱해야함.
        } catch (error) {  //에러가 발생했을 경우 에러를 콘솔창에 출력
            console.log("fail?"+error);
            throw new Error(error);
        }
    };
    fetchData();
    


    
    return(
        <div></div>
    )

}
  
  export default SendSol;
  
