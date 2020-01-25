import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bar } from '../../node_modules/react-chartjs-2';
class Timeline extends Component {
    constructor(props) {
        super(props);
    console.log(props);
        var myChart = document.getElementById('myChart');
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                    <div className="AlignLeft blockTitle"> Timeline</div>
                    <div className="GraphHolder">
                        <Bar
                            data={{
                                labels: ["1900", "1950", "1999", "2050"],
                                datasets: [
                                  {
                                    label: "Number of views",
                                    backgroundColor: "#3e95cd",
                                    data: [this.props.views,this.props.views,this.props.views,this.props.views]
                                  }, {
                                    label: "People reached",
                                    backgroundColor: "#8e5ea2",
                                    data: [this.props.reach,this.props.reach,this.props.reach,this.props.reach]
                                  },
                                  {
                                    label: "Click",
                                    backgroundColor: "##5F9EA0",
                                    data: [this.props.clicks,this.props.clicks,this.props.clicks,this.props.clicks]
                                  }
                            
                                ]
                                
                              }
                            }
                            options={{
                                responsive:true,
                                maintainAspectRatio:false,
                                title: {
                                  display: true
                                },
                                legend: { display: true }
                              }}
                        />
                        </div>
                        </div>
                    </div>
            </div>

        );
    }
}

export default Timeline;