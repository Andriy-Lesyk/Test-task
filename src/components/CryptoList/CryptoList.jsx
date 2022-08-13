import React from 'react';
import PropTypes from 'prop-types';
import {
  CryptoSheet,
  CryptoItem,
  Information,
} from './CryptoList.styled';

function CryptoList({ cryptoArrayFiltered }) {
  return (
    <div>
      <CryptoSheet>
        {cryptoArrayFiltered.length>0 ? (
          cryptoArrayFiltered.map(crypt => (
            <CryptoItem key={crypt.id}>
              <Information>{cryptoArrayFiltered.indexOf(crypt) + 1}.</Information>
              <Information>{crypt.symbol}</Information>
              <Information>${crypt.prices[0].toFixed(3)}</Information>
            </CryptoItem>
          ))
        ) : (
          <p>Try another letter</p>
        )}
      </CryptoSheet>
    </div>
  );
}
CryptoList.propTypes = {
  
  cryptoArrayFiltered: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      symbol: PropTypes.string.isRequired,
      prices: PropTypes.array.isRequired,
    })
  ),
};
export default CryptoList;
