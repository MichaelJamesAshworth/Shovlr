import { useLocation, Redirect, Link } from 'react-router-dom';
import axios from 'axios';

const ActiveRequest = () => {

  // get request id from url
  const location = useLocation();
  const path = location.pathname
  var n = path.lastIndexOf('/');
  var requestId = path.substring(n + 1);

  console.log(requestId);

  const markComplete = () => {
    axios.put(`/api/removal_requests/completed_at/${requestId}`)
    .then(resp => {
        console.log('marked complete in db');
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });
  }



  return (
    <div className='ActiveRequest'>
      <h1>This request is now active</h1>
      <img
        className='snowflake'
        src="../images/Walk.gif"
        alt="Loading"
      />
      <br/>
      <Link to="/" onClick={markComplete}><button type="button" className="btn">Complete</button></Link>
    </div>
  );
}

export default ActiveRequest;