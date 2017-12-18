import React from 'react';
import { connect } from 'react-redux';

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


// function mapStateToProps( state ) {
//   return {auth: state.auth};
// }

function mapStateToProps ({ auth }) {
  return { auth };
}

export default connect(mapStateToProps) (Header);