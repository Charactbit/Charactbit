import {Link} from "react-router-dom";
import charactbitLogo from './mainLogo.png';
import bellImg from './img/bell.png';
import './App.css';
import {post} from "axios"
import {get} from "axios"



function Header() {

    function coin_Object()
    { 
      var coinName,coinSymbol ,coinAmmount , coinImgUrl;//값을 대입해봐야, 효과가 없다. new 이후에 넣어주어야 한다.
    } 

    function new_Object(coinName, coinSymbol ,coinAmmount , coinImgUrl)
    { 
      var coin = new coin_Object();
      coin.coinName = coinName;
      coin.coinSymbol = coinSymbol;
      coin.coinAmmount = coinAmmount;
      coin.coinImgUrl = coinImgUrl;
      return coin;
    }
    
    var coinList = {};

    const getProvider = () => { //솔라나가 윈도우에 있는지를 확인하여 없으면 설치페이지로, 있다면 연동페이지로, 연동되었다면 개인키를 얻는다.

      if ("solana" in window) {   //솔라나가 이미 설치되어있다면.
        const provider = window.solana;
        console.log(provider);
        if (provider.isPhantom) {  
          const fetchData = async () =>{  //지갑연동을 하고  지갑 공개키를 얻는다.
            try {
              const resp = await window.solana.connect(); //연결을 하고, 지갑정보를 리턴받는다.
              //console.log(resp.publicKey.toString()); //지갑의 publicKey를 출력해본다.
              const jsonCoin = get("https://api.solscan.io/account/tokens?address="+resp.publicKey.toString());
              //jsonCoint 은 promise로 감싸진 객체이다,.
              /* {
                  "tokenAddress":"YtfMZ4jg2ubdz4GasY86iuGjHdo5rCPJnFqgSf8gxAz",
              "tokenAmount":
                  {
                    "amount":"100000000000000","decimals":9,"uiAmount":100000,"uiAmountString":"100000"
                  },
                  "tokenAccount":"9Lr6qGrTTBU8bVKL1TPJLxGi34fV3nhCSmjQJrczmMog"
                  ,"tokenName":"Charactbit",
                  "tokenIcon":"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6D4aGWykMymkFaeVzDS6MiH6QEujsHUze2pPGbJEyh7y/logo.png",
                  "rentEpoch":268,
                  "lamports":2039280,
                  "tokenSymbol":"CHB"}
                *  */             
              
              jsonCoin.then(function(resolvedData) {
                const objTest = JSON.stringify(resolvedData); // 
                const parse = JSON.parse(objTest);
                const data = parse.data;
                const dada = data.data;//여기서의 dada가 
                //console.log(dada);

                for (var key in dada){
                  //console.log("key = "+key); 키는 인덱스 기반으로 돈다.
                  //const token = JSON.parse(JSON.stringify(dada[0]));
                  // const token1Name = token1.tokenName;
                  // console.log(token1Name);
                  // const token1Amount = JSON.parse(JSON.stringify(token1.tokenAmount)).uiAmount;
                  // console.log(token1Amount);
                  
                  const token = JSON.parse(JSON.stringify(dada[key]));
                  const tokenName = token.tokenName;
                  
                  const tokenAmount = JSON.parse(JSON.stringify(token.tokenAmount)).uiAmount;
                  coinList[key] = new_Object(tokenName,token.tokenSymbol,tokenAmount , token.tokenIcon);
                }
                
                for (var key in coinList){
                  if(coinList[key].coinAmmount===0){
                    continue;
                  }
                  document.write("token Symbol : "+coinList[key].coinSymbol+"<br/>");
                  document.write('<img src = "'+coinList[key].coinImgUrl+'" width="50px"/><br/>');
                  document.write("token Name : "+coinList[key].coinName+"<br/>");
                  document.write("token Ammount : "+coinList[key].coinAmmount+"<br/><br/>");
                }
              });
              //지갑 공개키를 기반으로 해당 지갑의 코인리스트를 얻어온다. JSON 데이터를 파싱해야함.
            } catch (err) {  //에러가 발생했을 경우 에러를 콘솔창에 출력
              console.log(" { code: 4001, message: 'User rejected the request.' }"+err);
            }
          };
          fetchData();  //fetchData 실행.
          return provider;
        }
      }
      //팬텀을 설치하는 페이지로 이동한다.
      window.open("https://phantom.app/", "_blank");
    };

    function disconnetSol(){    //phantom지갑의 연동을 disconnect한다.
      window.solana.disconnect();
    }

    return (
          <div className = "header">
            
            <img src={charactbitLogo} className="mjuLogof" alt="mainLogo" width="150px"/>
            
            <Link to="/"><button className="home"><h1 className="mainTitle">Donation beta</h1></button></Link>
            <button onClick={getProvider} className = "wallet"  >👝Connect wallet</button>
            <Link to="/createId"><button className = "createId">회원가입</button></Link>
            <Link to="/login"><button className = "login" >로그인</button></Link>
            <Link to="/notification"><button className = "notification" ><img src={bellImg} alt="bellImg" width="50px"/></button></Link>

          </div>
    );
  }
  
  export default Header;
  
