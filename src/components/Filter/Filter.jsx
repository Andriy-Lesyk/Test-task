import React, {useState} from 'react'
import cryptoArray from './crypto.json'
import CryptoList from 'components/CryptoList/CryptoList';
import {Input} from './Filter.styled'

function Filter() {
    const [filter, setFilter] = useState('');
    
   const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
    
  };
  let cryptoArrayFiltered= cryptoArray.data;
  filter&&(cryptoArrayFiltered = cryptoArray.data.filter(crypt=> crypt.symbol[0]===filter.toLocaleUpperCase()))
  
  return (
    <div>
        <Input  value={filter} onChange={changeFilter} type="text"  placeholder='Search...' />
        <CryptoList cryptoArrayFiltered={cryptoArrayFiltered}/>
    </div>
  )
}

export default Filter