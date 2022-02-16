import { useState, useEffect } from "react";
import axios from "axios";
import PastRequest from '../components/PastRequest';

const PastRequests = () => {

  // state
  const [requests, setRequests] = useState(null);

  // hook
  useEffect(() => {
    Promise.all([
      axios.get('/api/removal_requests/completed/1'),
    ]).then((all) => {
      setRequests(all[0].data);
    });
  }, []);

  return (
    <div className="PastRequests">
      <h2>Past requests</h2>
      { requests && <PastRequest requests={requests} />}
    </div>
  );
}

export default PastRequests;