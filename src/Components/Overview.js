import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Overview extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                            <div className="AlignLeft blockTitle"> Overview</div>
                            <div className="Display-flex">
                            <div><i className="far fa-hand-point-up fa-lg abc"></i></div>
                                <div className="AlignLeft">
                                    <div >Clicks</div>
                                    <div className="TextColor">{this.props.clicks}</div>
                                    <div>Total number of click on this campaign</div>
                                </div>
                                <div><i className="far fa-eye fa-lg abc"></i></div>
                                <i className=""></i>
                                <div className="AlignLeft">
                                    <div>View</div>
                                    <div className="TextColor">{this.props.views}</div>
                                    <div>Total number of views on this campaign</div>
                                </div>
                            </div>
                            <div className="Display-flex">
                                <div><i className="fas fa-users fa-lg abc"></i></div>
                                <div className="AlignLeft">
                                    <div>Reach</div>
                                    
                                    <div className="TextColor">{this.props.reach}</div>
                                    <div>Total number of reach on this campaign</div>
                                </div>
                                <div><i className="fas fa-heartbeat fa-lg abc"></i></div>
                                <div className="AlignLeft">
                                    <div>Frequency</div>
                                    <div className="TextColor">{this.props.freq}</div>
                                    <div>Total number of frequency on this campaign</div>
                                </div>
                            </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default Overview;