import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav id="navbar" className="navbar fixed-top navbar-dark">
      <div className="container-fluid">
          <Link to="/" className='navbar-brand'>Shovlr - jobs</Link>
      </div>
    </nav>
  )
}

