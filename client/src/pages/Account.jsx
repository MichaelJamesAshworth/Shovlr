import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <div className='Account'>
      <h2>Account</h2>
      <nav>
        <Link to='PastRequests'>
          <button type="button" className="btn btn-primary">View past requests</button>
        </Link>
      </nav>
    </div>
  );
}

export default Account;