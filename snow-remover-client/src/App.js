import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [requests, setRequests] = useState([ ]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/removal_requests'
    })
    .then(result => {
      console.log(result.data)
    })
    .catch(error => {
      console.log('/api/removal/requests error')
    })
  }, [])

  return (
    <div className="App">
      <h1>Snow remover client</h1>
    </div>
  );
}

export default App;
