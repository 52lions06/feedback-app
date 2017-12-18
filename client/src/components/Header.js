import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login to Google</a></li>;
      default:
        return <li><a>Logout</a></li>;
    }
  }
  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="left brand-logo">
            Email Magic
          </a>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}


// function mapStateToProps( state ) {
//   return {auth: state.auth};
// }

//============================================[Same as below]

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);