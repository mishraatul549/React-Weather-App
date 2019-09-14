import React from 'react';
import axios from 'axios';
import Form from './Form';
import WeatherCard from './WeatherCard';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {weather_report:[]}
  }
   weatherApiCall = async (city,country) =>
  {
    console.log(city);
    console.log(country);
    const report = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=404caee44ab51b6fa8c42b2b463bfdc9`);
    console.log(report.data);
    this.setState({weather_report:report.data})
  }
  render(){
    return(
      <div className="ui container" style={{marginTop:"10px"}}>
         <Form callApi={this.weatherApiCall} />
         <WeatherCard weather_report={this.state.weather_report} />
      </div>
     );
  }
}


export default App;
