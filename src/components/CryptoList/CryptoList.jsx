import React from 'react'
import cryptoArray from './crypto.json'
import {CryptoSheet, CryptoItem, Title, Price, Number} from './CryptoList.styled'

function CryptoList() {
  return (
    <div>
        <CryptoSheet>
            {cryptoArray.data.map(crypt=>(
                <CryptoItem key={crypt.id}>
                    <Number>{(cryptoArray.data.indexOf(crypt))+1}.</Number>
                    <Title>{crypt.symbol}</Title>
                    <Price>{crypt.prices[0].toFixed(3)}</Price>
                </CryptoItem>
            ))}
        </CryptoSheet>
    </div>
  )
}

export default CryptoList
