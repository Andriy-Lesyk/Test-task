import React from 'react';
import {
  CryptoSheet,
  CryptoItem,
  Title,
  Price,
  Number,
} from './CryptoList.styled';

function CryptoList({ cryptoArrayFiltered }) {
  return (
    <div>
      <CryptoSheet>
        {cryptoArrayFiltered.length>0 ? (
          cryptoArrayFiltered.map(crypt => (
            <CryptoItem key={crypt.id}>
              <Number>{cryptoArrayFiltered.indexOf(crypt) + 1}.</Number>
              <Title>{crypt.symbol}</Title>
              <Price>${crypt.prices[0].toFixed(3)}</Price>
            </CryptoItem>
          ))
        ) : (
          <p>Try another letter</p>
        )}
      </CryptoSheet>
    </div>
  );
}

export default CryptoList;
