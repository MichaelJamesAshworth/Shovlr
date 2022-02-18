import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/removal_requests'
    })
    .then(result => {
      console.log(result.data)
      setRequests(result.data)
    })
    .catch(error => {
      console.log('/api/removal/requests error')
    })
  }, [])

  const calculatePrice = (size) => {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    const priceInCents = size;
    return formatter.format(priceInCents/100);
  }

  const requestList = requests && requests.map(request => {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Request</h5>
          <p className="card-text">note from client: {request.note}</p>
          <p className="card-text">adress: {request.address}</p>
          <p className="card-text">total cost: {calculatePrice(request.cost)}</p>
        </div>
      </div>
    )
  })

  return (
    <div className="App">
      <h1>Snow remover client</h1>
      {requestList}
    </div>
  );
}

export default App;
