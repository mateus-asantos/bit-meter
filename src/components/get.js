import axios from 'axios'

const urlBTC = 'https://blockchain.info/pt/ticker'

export const getData = axios.get(urlBTC)
  .then(function(data){
    console.log(data);
    return(data)
  })
