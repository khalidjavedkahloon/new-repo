import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CampaignDetail extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                            <div className="AlignLeft blockTitle"> Botox By Dr.Azbia Sayeen At Marium Hospital</div>
                            <div className="Display-flex">
                                <div className="AlignLeft">
                                    <div >Showing Results for Campaign</div>
                                    <div >That Modified on</div>
                                    <div>Total number of click on this campaign</div>
                                </div>
                                <div className="AlignLeft">
                                    <div>{this.props.name}</div>
                                    <div>Small</div>
                                    <div>10 days 0$ </div>
                                </div>
                            </div>
                            <div className="Display-flex">
                               <img src="doctor-patient.jpg" className="img-responsive" />
                            </div>
                        </div>

                    </div>
            </div>

        );
    }
}

CampaignDetail.propTypes = {

};

export default CampaignDetail;