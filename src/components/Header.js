import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='yellow lighten-1'>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo black-text'>
          Food Recepies
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link className='black-text' to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link className='black-text' to='/contacts'>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
