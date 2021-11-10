import React, {Component} from 'react';
import './Status.css'
import Tooltip from '@mui/material/Tooltip';
import StatusDesign from './StatusDesign';


class Status extends Component {

    constructor() {
        super();
    }

    state = {
        loading: true,
        person: null,
    };


    // fetch data from API
    async componentDidMount() {
        const url = "http://192.168.100.7:5000/userName/status";
        const response = await fetch(url);
        console.log(response)
        const data = await response.json();
        this.setState({person: data, loading: false});
    }

    render() {
        return (
           <div>
               {this.state.loading || !this.state.person ? (
                    <div>loading...</div>
               )  : (
                    <div className='box-center'>
                        {/* <div>Prenume: {this.state.person.n}</div>
                        <div>Nume: {this.state.person.name.last}</div> */}
                        <div className='center'>Username: {this.state.person.userName}</ div>
                        <div className='center'>Grupa: {this.state.person.Grupa} </div>
                        <div className='center'>mail: {this.state.person.mail} </div>
                    </ div>
               )}
            </ div>
        // <div>
        //     {this.state.loading || !this.state.person ? ( <div>loading...</div>) : ( <StatusDesign dataPerson={this.state.person}/>)}
        // </div>
        );
    }
}

export default Status;