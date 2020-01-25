import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginUser from './Components/LoginUser';
import CampaignDetail from './Components/CampaignDetail';
import Overview from './Components/Overview';
import Timeline from './Components/Timeline';
import SocialActivity from './Components/SocialActivity';


function App() {
  var jsonData={
      "Username":"Khalid Javed",
      "Campaign":{
        "name":"Marketer",
        "ModifiedOn":"01-02-2020",
        "clicks":"454",
        "views":"784",
        "reach":"345",
        "freq":"234",     
        "reactions":"345",
        "Comments":"234"
      }
  };
  return (
    <div className="App">
      <LoginUser name={jsonData.Username}/>
      
        <div className="container">
        <div className="Username">Campaign Result</div>
          <div className="row flex">
            <div className="col-md-5 col-xs-5 shadow p-3 mb-5 bg-white rounded "><CampaignDetail name={jsonData.Campaign.name}/></div>
            <div className="col-md-5 shadow p-3 mb-5 bg-white rounded "><Overview clicks={jsonData.Campaign.clicks} views={jsonData.Campaign.views} reach={jsonData.Campaign.reach} freq={jsonData.Campaign.freq}/></div>
          </div>
        </div>
        <div className="container">
          <div className="row flex">
            <div className="col-md-5 shadow p-3 mb-5 bg-white rounded "><Timeline clicks={jsonData.Campaign.clicks} views={jsonData.Campaign.views} reach={jsonData.Campaign.reach}/></div>
            <div className="col-md-5 shadow p-3 mb-5 bg-white rounded "><SocialActivity reaction={jsonData.Campaign.reactions} comment={jsonData.Campaign.Comments}/></div>
          </div>
        </div>

    </div>
  );
}

export default App;
