import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ActiveRequest = () => {

  // get request id from url
  const location = useLocation();
  const path = location.pathname
  var n = path.lastIndexOf('/');
  var requestId = path.substring(n + 1);

  console.log(requestId);

  const markComplete = () => {
    console.log('complete')

    axios.put(`/api/removal_requests/completed_at/${requestId}`)
    .then(resp => {
        console.log('response', resp.data);
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });

    // const res = await axios.put(`http://localhost:3001/api/removal_requests/started_at/${requestId}`, { completed_at: new Date().toISOString() });
    // console.log(res);

    // useEffect(() => {
    //   // PUT request using axios inside useEffect React hook
    //   const completedAt = { completed_at: new Date().toISOString() };
    //   console.log(completedAt);
    //   axios.put(`http://localhost:3001/api/removal_requests/started_at/${requestId}`, completedAt)
    //       .then(response => useComplete(response));
  
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);


  }



  return (
    <div className='ActiveRequest'>
      <h1>This is the active request page</h1>

      <button onClick={markComplete} type="button" class="btn btn-success">Job completed</button>
      {/* <Link to="/" className='navbar-brand' onClick={markComplete}><button type="button" class="btn btn-success">Job completed</button></Link> */}
    </div>
  );
}

export default ActiveRequest;