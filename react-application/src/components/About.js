import React from 'react';
import axios from 'axios';

export default class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: '', user :{}};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        axios.get('http://localhost:8000/api/movies/' + this.state.value)
        .then(res => {console.log(res); this.user = res.data.data; this.setState({user : this.user});});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Id:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div className="card" style={{width: 18 +'rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Name : { this.state.user.name }</h5>
                        <p className="card-text">Genre : { this.state.user.genre }</p>
                        <p className="card-text">Rating : { this.state.user.rating }</p>
                    </div>
                </div>
            </div>
            
        );
    }
}