import React from 'react';
import axios from 'axios';

export default class MovieDetails extends React.Component {
    
    constructor(){
        super();
        this.state = {
            user : {}
        }
    }

    componentDidMount(){
        console.log('In Component');
        axios.get('http://localhost:8000/api/movies/' + this.props.match.params.id)
        .then(res => {console.log(res); this.user = res.data.data; this.setState({user : this.user});});
    }

    render(){
        console.log(this.props);
        //this.id = this.props.match.params;
        //console.log(`id is ${id}`);
        return (
            <div className="card" style={{width: 18 +'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Name : { this.state.user.name }</h5>
                    <p className="card-text">Genre : { this.state.user.genre }</p>
                    <p className="card-text">Rating : { this.state.user.rating }</p>
                </div>
            </div>
        );
    }
}