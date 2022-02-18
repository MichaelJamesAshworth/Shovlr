import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar fixed-top navbar-dark bg-primary">
      <div className="container-fluid">
          <Link to="/" className='navbar-brand'>Shovlr - jobs</Link>
      </div>
    </nav>
  )
}

