import React from 'react';

class WeatherCard extends React.Component{
  render(){
    if(this.props.weather_report.length!==0){
      const x = this.props.weather_report;
      return(
        <div className="ui segment">
          <h1>current weather report of {x.name}</h1>
          <p>Cuurent Temperature:{x.main.temp}C</p>
          <p>Max-Min Temperature :{x.main.temp_max}-{x.main.temp_min}C</p>
          <p>Pressure:{x.main.pressure}hpa</p>
          <p>Humidity:{x.main.humidity}</p>
          <p>wind speed :{x.wind.speed}m/s</p>
          <p>visibility:{x.visibility!=null?x.visibility:"DATA NOT AVILBLE FOR THIS CITY"}</p>
          <p>Cloud:{x.clouds.all}%</p>
        </div>
      );
    }
    else{
      return(null);
    }
  }

}

export default WeatherCard;
