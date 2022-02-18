import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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

  const markStarted = (id) => {
    axios.put(`/api/removal_requests/started_at/${id}`)
    .then(resp => {
        console.log('marked started in db');
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });
  }

  const requestList = requests && requests.map(request => {
    if (request.started_at === null && request.completed_at === null) {
      
      return (
        <div className="card">
          <div className="card-body">
            <p className="card-text">{request.note}</p>
            <p className="card-text">Address: {request.address_id}</p>
            <p className="card-text">{calculatePrice(request.total_cents)}</p>
            <Link to={{
                pathname: '/ActiveRequest/' + request.id,
              }} onClick={() => markStarted(request.id)}><button type="button" class="btn btn-success">Accept</button>
            </Link>
          </div>
        </div>
      )
    }
  })
  return (
    <div className='Home'>
      <h1>Jobs available</h1>
      {requestList}
    </div>
  );
}

export default Home;