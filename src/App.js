import React, { Component, Fragment } from "react";
import { Auth } from "aws-amplify";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      if (await Auth.currentSession()) {
        this.userHasAuthenticated(true);
      }
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = async event => {
    await Auth.signOut();

    this.userHasAuthenticated(false);

    this.props.history.push("/login");
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating &&
      <div className="container-fluid">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div class="navbar-header">
              <li onClick={this.handleLogout}><Link to={'/'}><img src={require('./images/icon.png')} width="160px" height="60px" /></Link></li>
            </div>

            {this.state.isAuthenticated
              ?
              <ul className="nav navbar-nav col-md-8">
                <li><Link to={'/homepage'}><i class="fas fa-home fa-2x"></i></Link></li>
                <li><Link to={'/mynetwork'}><i class="fas fa-user-friends fa-2x"></i></Link></li>
                <li><Link to={'/jobs'}><i class="fas fa-briefcase fa-2x"></i></Link></li>
                <li><Link to={'/messaging'}><i class="fas fa-comments fa-2x"></i></Link></li>
                <li><Link to={'/notifications'}><i class="fas fa-bell fa-2x"></i></Link></li>

                <li onClick={this.handleLogout}><Link to={'/'}>Logout</Link></li>
              </ul>
              : <ul className="nav navbar-nav col-md-8">
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={'/gallery'}>Gallery</Link></li>
                <li><Link to={'/products'}>View Products</Link></li>
              </ul>
            }

          </div>
        </nav>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);
