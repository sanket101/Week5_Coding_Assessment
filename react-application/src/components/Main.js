import React from 'react';
import Movie from './Movie';
import User from './User';
import axios from 'axios';

export default class Main extends React.Component {
    
    constructor(){
        super();
        this.state = {
            phones : []
        }
        
        this.selectedProduct = this.selectedProduct.bind(this);
        console.log(`Constructor is called!`);
    }

    selectedProduct(obj){
        console.log(obj);
        //console.log(`${obj.title}`);
        const filteredList = this.originalList.filter(user => user.name == obj.name);
        
        this.setState({
            phones : [
                {
                    name : obj.name,
                    phone : obj.phone,
                    website : obj.website
                }
            ]
        });
        /*
        this.setState({
            phones : filteredList
        });

            this.setState({
                phones : [
                    {
                        name:obj.title, 
                        desc:obj.body
                    }
                ]
            });
        */
    }

    //this method is called only once before dom loaded
    componentDidMount(){
        console.log(`Component is mounted on the DOM`);

        axios.get('http://localhost:8000/api/movies')
        .then(res => {console.log(res); this.originalList = res.data.data; this.setState({phones : this.originalList})});

        //console.log(this.state.phones);
        //this.fixedState = this.state.phones;
    }

    render(){
        console.log('In render');
        return (
            <div className="row">
                {
                    this.state.phones.map((movie,index) => <Movie key={index} id= {movie._id} name={movie.name} />)
                }
            </div>
        );
    }
    
}

//export default Main;