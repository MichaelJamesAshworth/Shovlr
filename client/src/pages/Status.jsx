import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCreditCard, faEnvelope, faComment, faCarSide } from "@fortawesome/free-solid-svg-icons";

const Status = () => {
  const [request, setRequest] = useState(null);
  
  useEffect(() => {
    setInterval(() => {getRequest()}, 1000);
  }, [])

  const getRequest = () =>  {
    axios({
      method: 'GET',
      url: '/api/removal_requests'
    })
    .then(result => {
      setRequest(result.data[result.data.length - 1]);
    })
    .catch(error => {
      console.log('/api/removal/requests error')
    })
  };

  // useEffect(() => {
  //   console.log(request);
  // }, [request]);

  const calculatePrice = (size) => {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    const priceInCents = size;
    return formatter.format(priceInCents/100);
  }

  const created = (
    <>
      <h1>Connecting you with a snow remover</h1>
      <img
      className="status-image"
      src="images/Walk.gif"
      alt="Loading"
      />
    </>
  );
  const started = (
    <>
      <h1>A snow remover has accepted your request</h1>
      <p>Your request is now in progress</p>
      <img
      className="status-image"
      src="images/Walk.gif"
      alt="Loading"
      />
    </>
  );
  const complete = (
    <>
      <h1>Your request has been completed</h1>
      <p>Thank you for your business!</p>
    </>
    );
  
  const renderStatusPage = () => {
    if (request != null && request.started_at && request.completed_at === null) {
      return started
    } else if (request && request.completed_at != null) {
      return complete
    } else {
      return created
    }
  }

  useEffect(() => {
    console.log(request)
  }, [request])

  
  return (
    <div className="status">
      <div className="card">
        <div className="card-header">
          {renderStatusPage()}
        </div>
        <ul className="list-group list-group-flush">
          
          {request && <li className="list-group-item d-flex"><div className="p-2"><FontAwesomeIcon icon={faLocationDot} color="#2b6777" /></div> <div className="p-2">{request.address}</div></li>}
          {request && <li className="list-group-item d-flex"><div className="p-2"><FontAwesomeIcon icon={faEnvelope} color="#2b6777" /></div> <div className="p-2">{request.users_email}</div></li>}
          {request && <li className="list-group-item d-flex"><div className="p-2"><FontAwesomeIcon icon={faCarSide} color="#2b6777" /></div> <div className="p-2">{request.size}</div></li>}
          {request && <li className="list-group-item d-flex"><div className="p-2"><FontAwesomeIcon icon={faCreditCard} color="#2b6777" /></div> <div className="p-2">{calculatePrice(request.total_cents)}</div></li>}
          {request && request.note.length > 0 && <li className="list-group-item d-flex"><div className="p-2"><FontAwesomeIcon icon={faComment} color="#2b6777" /></div> <div className="p-2">{request.note}</div></li>}
        </ul>
      </div>
      {request && request.completed_at != null && <Link to="/"><button type="button" class="btn btn-success">return to home</button></Link>}
    </div>
  );
}

export default Status;