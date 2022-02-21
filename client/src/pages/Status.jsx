import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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
      <h1>finding shoveler</h1>
      <img
      className="status-image"
      src="images/Winter.gif"
      alt="Loading"
      />
    </>
  );
  const started = (
    <>
      <h1>Your request in progress</h1>
      <img
      className="status-image"
      src="images/Winter.gif"
      alt="Loading"
      />
    </>
  );
  const complete = (
    <>
      <h1>Your request has been complete</h1>
      <h4>Thank you for your business!</h4>
      <Link to="/">return to home</Link>
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

  
  return (
    <div className="status">
      {renderStatusPage()}

    </div>
  );
}

export default Status;