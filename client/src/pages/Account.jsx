import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <div className='Account'>
      <h2>Account</h2>
      <nav>
        <Link to='../Status'>
          <button type="button" className="btn btn-success account-button">View ongoing request</button>
        </Link>
        <br/>
        <Link to='PastRequests'>
          <button type="button" className="btn btn-primary account-button">View past requests</button>
        </Link>
      </nav>
      <p className="foot-text">Shovlr 2022</p>
    </div>
  );
}

export default Account;