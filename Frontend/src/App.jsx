import './App.css'
import axios from 'axios';
import {useEffect} from 'react';
function App() {
  
  useEffect(()=>{
    
    axios.get('http://localhost:3000/api/test') 
    .then((response) => {
      console.log(response.data);
      
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
},[]);

  return (
    <>
    <h1>DocNova</h1>
    </>
  )
}

export default App
