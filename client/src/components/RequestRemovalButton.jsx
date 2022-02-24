import { Link } from 'react-router-dom';

const RequestRemovalButton = () => {

  return (
    <Link to='Checkout' className='requestButton'>
      <button type="button" className="btn">Requst snow removal</button>
    </Link>
  );
}

export default RequestRemovalButton;