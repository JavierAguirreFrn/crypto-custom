import React from 'react'
import { RowCrypto } from './RowCrypto'

export const TableCrypto = ({coin, search}) => {
    console.log("TheCoinFromTableCrypto", coin)
    console.log("thesearch", search)



    let filteredSearch
    if(coin!== undefined && search !== undefined){

       filteredSearch = coin.filter((elemt) => 
      elemt.name.toLowerCase().includes(search)
      )
    }


    if(filteredSearch !== undefined){
    console.log("elfilteredSearch", filteredSearch)
    }

    // let filteredSearch = coin.filter((elemt) => 
    // elemt.name.toLowerCase().includes(search.toLowerCase())
    // )


    // console.log("elfilteredSearch", filteredSearch)

    let arrayHeadersTable = ["#", "Moneda", "Precio Actual", "Cambio 24hrs(%)"]

  return (
    <>
    
    <table className="table table-dark mt-4 table-hover">
   
    <thead>
        <tr>
    { arrayHeadersTable.map( (name, i) => <td key={i}>{name}</td>) }

    </tr>
    </thead>
    <tbody>
        {filteredSearch?.length > 0 && filteredSearch.map(( coin, index) => <RowCrypto key={index} coin={coin} index={index}  />)}
        </tbody>
       
</table>
</>
  )
}
