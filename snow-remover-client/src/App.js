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
    if (request.started_at === null) {
      return (
        <div className="card">
          <div className="card-body">
            <p className="card-text">{request.note}</p>
            <p className="card-text">Address: {request.address_id}</p>
            <p className="card-text">{calculatePrice(request.total_cents)}</p>
            <button type="button" class="btn btn-success">Accept</button>
          </div>
        </div>
      )
    }
  })

  return (
    <div className="App">
      <h1>Jobs available</h1>
      {requestList}
    </div>
  );
}

export default App;
