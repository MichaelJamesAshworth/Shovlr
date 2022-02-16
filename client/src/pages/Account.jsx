import PastRequests from './PastRequests';
import { Link, Routes, Route } from 'react-router-dom';

const Account = () => {
  return (
    <div>
      <h1>This is the Account page</h1>

      <nav>
        <Link to='PastRequests'>Past Requests</Link>
      </nav>
    </div>
  );
}

export default Account;