import React from 'react'

export const RowCrypto = ({coin, index}) => {
    console.log("lacoin222", coin)
  return (
    <>
  <tr>
    <td>{index}</td>
    <td>
    <img src={coin.image} alt={coin.name} style={{width:"3%"}} className="me-4" />
    <span>
    {coin.name}
    </span>
    </td>
    <td>{coin.current_price}</td>
    <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}
    >{coin.price_change_percentage_24h}</td>
    </tr>
   </>

    )

  
}
