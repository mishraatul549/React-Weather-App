import React from 'react';

class Form extends React.Component{

  onFormSubmit = (formvalue) =>{
    formvalue.preventDefault();
    const city = formvalue.target.city.value;
    const country = formvalue.target.country.value;
    this.props.callApi(city,country);

  }

  render(){
    return(
    <div className="ui segment">
      <h1>please Enter  your  city and country Name</h1>
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <label>city:</label>
        <input type="text" placeholder="city" className="ui field " id="city"/>
        <label>country</label>
        <input type="text" placeholder="country" className="ui field" id="country" />{"\n"}
        <input type="submit" value="click here to know about weather condition" className="ui field" style={{align:"centre" ,marginLeft:"300px",marginTop:"20px"}}  />
      </form>
    </div>
  );
  }
}

export default Form;
