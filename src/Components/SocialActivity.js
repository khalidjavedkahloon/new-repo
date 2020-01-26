import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SocialActivity extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="AlignLeft blockTitle"> Social Activity</div>
                        <div className="Display-flex">
                            <div className="socialImage"><img src="social.jpg" className="img-responsive socialImg"></img></div>
                            <div className="AlignRight">
                            <div><i className="far fa-smile fa-lg abc"></i></div>
                                <div className="AlignLeft">
                                    <div >Reactions</div>
                                      <div className="TextColor">{this.props.reaction}</div>
                                    <div>Total number of click on this campaign</div>
                                </div>
                                <div><i className="far fa-comment-alt fa-lg abc"></i></div>
                                <i className=""></i>
                                <div className="AlignLeft">
                                    <div>Comments</div>
                                      <div className="TextColor">{this.props.comment}</div>
                                    <div>Total number of views on this campaign</div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="Display-flex">
                            <div><i className="fas fa-users fa-lg abc"></i></div>
                            <div className="AlignLeft">
                                <div>Reactions</div>

                                <div className="TextColor">334</div>
                                <div>Total number of reach on this campaign</div>
                            </div>
                            <div><i className="far fa-smile fa-lg abc"></i></div>
                            <div className="AlignLeft">
                                <div>Reactions</div>
                                <div className="TextColor">334</div>
                                <div>Total number of frequency on this campaign</div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>

        );
    }
}
export default SocialActivity;