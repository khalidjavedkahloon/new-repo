import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginUser extends Component {
    constructor(props) {
        console.log(props);
        super(props);

    }
    LogoutOptions = () => {
        alert("Logout Called");
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <span className="Username">{this.props.name}</span>
                            <div className="dropdown logoutbtn"> 
                                <i className="fas fa-globe dropdown-toggle" data-toggle="dropdown">
                                </i>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Signout</a>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginUser;