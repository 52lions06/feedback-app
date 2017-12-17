import React from 'react';

class Header extends React.Component {
  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="left brand-logo">
            Email Magic
          </a>
          <ul className="right">
            <li>
              <a>Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;