import { Link } from 'react-router-dom';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from 'react-router-dom'

export default function Nav(props) {

  const location = useLocation();
  //console.log(location.pathname);

  const renderNavButton = () => {
    if (location.pathname === '/Account') {
      return <Link to="/" className='navbar-brand'><FontAwesomeIcon icon={faAngleLeft} /></Link>
    } else if (location.pathname === '/Account/PastRequests') {
      return <Link to="/Account" className='navbar-brand'><FontAwesomeIcon icon={faAngleLeft} /></Link>
    } else {
      return <Link to="/Account" className='navbar-brand'><FontAwesomeIcon icon={faUser} /></Link>
    }
  }

  return (
    <nav className="navbar fixed-top navbar-dark bg-primary">
      <div className="container-fluid">
          <Link to="/" className='navbar-brand'>Shovlr</Link>
          {renderNavButton()}
      </div>
    </nav>
  )
}

