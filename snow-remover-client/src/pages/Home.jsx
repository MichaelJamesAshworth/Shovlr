import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCreditCard, faCarSide, faComment } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [requests, setRequests] = useState([]);
  
  useEffect(() => {
    getRequests();
  }, [])

  const getRequests = () =>  {
    axios({
      method: 'GET',
      url: '/api/removal_requests'
    })
    .then(result => {
      setTimeout(() => {getRequests()}, 1000);
      console.log(result.data)
      setRequests(result.data)
    })
    .catch(error => {
      console.log('/api/removal/requests error')
    })
  };

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
          <ul className="list-group list-group-flush">
            {request && <li className="list-group-item d-flex"><div className="p-2"><FontAwesomeIcon icon={faLocationDot} /></div> <div className="p-2">{request.address}</div></li>}
            {request && <li className="list-group-item d-flex"><div className="p-2"><FontAwesomeIcon icon={faCarSide} /></div> <div className="p-2">{request.size}</div></li>}
            {request && <li className="list-group-item d-flex"><div className="p-2"><FontAwesomeIcon icon={faCreditCard} /></div> <div className="p-2">{calculatePrice(request.total_cents)}</div></li>}
            {request && request.note.length > 0 && <li className="list-group-item d-flex"><div className="p-2"><FontAwesomeIcon icon={faComment} /></div> <div className="p-2">{request.note}</div></li>}
            {request && <li className="list-group-item"><Link to={{pathname: '/ActiveRequest/' + request.id,}} onClick={() => markStarted(request.id)} className='navbar-brand'><button type="button" class="btn btn-success">Accept</button></Link></li>}
          </ul>
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