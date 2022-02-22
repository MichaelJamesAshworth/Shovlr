import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCreditCard, faEnvelope, faComment } from "@fortawesome/free-solid-svg-icons";

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

  const created = (
    <>
      <h1>Connecting you with a snow remover</h1>
      <img
      className="status-image"
      src="images/Winter.gif"
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
      src="images/Winter.gif"
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
        <div className="card-body">
          {renderStatusPage()}
        </div>
        <ul className="list-group list-group-flush">
          {request && <li className="list-group-item"><FontAwesomeIcon icon={faLocationDot} /> {request.address}</li>}
          {request && <li className="list-group-item"><FontAwesomeIcon icon={faCreditCard} /> payment successful</li>}
          {request && <li className="list-group-item"><FontAwesomeIcon icon={faEnvelope} /> {request.users_email}</li>}
          {request && request.note.length > 0 && <li className="list-group-item"><FontAwesomeIcon icon={faComment} /> {request.note}</li>}
        </ul>
      </div>
      {request && request.completed_at != null && <Link to="/"><button type="button" class="btn btn-success">return to home</button></Link>}
    </div>
  );
}

export default Status;