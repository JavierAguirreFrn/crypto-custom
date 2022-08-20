import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { TableCrypto } from "./components/TableCrypto";


function App() {


  const [coin, setCoin] = useState([])
const [search, setSearch]= useState([])


const CoinGeckoCallApi = async () => {
  alert("entra")

  const response = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  )

  let dataApi = response.data;
  console.log("theresponse", response);
  console.log("thedataapi", dataApi);
  setCoin(dataApi)
}


  // function CoinGeckoCallApi() {
  //   alert("entra")
  //   axios
  //     .get(
  //       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  //     )
  //     .then(function (response) {
  //       // handle success
  //       let dataApi = response.data;
  //       console.log("theresponse", response);
  //       console.log("thedataapi", dataApi);
  //       setCoin(dataApi)
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log("elerrorquehubo",error);
  //     });
  // }


  useEffect(() => {
    CoinGeckoCallApi();
  }, [])
  

  return (
    <div className="container">
      <header className="App-header">
        {/* <BasicExampleCrypto /> */}
        <div>TableCrypto</div>
        <input type="text" placeholder="Buscar Moneda" className="form-control bg-dark text-light border-0 mt-4 text-center" onChange={(e)=>setSearch( e.target.value.toLowerCase())}/>
        {/* (e)=>console.log("ele", e.target.value) */}
        <TableCrypto coin={coin} search={search}/>
      </header>
    </div>
  );
}

export default App;
