import React, {Component} from 'react';
import './Status.css'
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


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
        const url = "http://localhost:8000/students/{email}/";
        const response = await fetch(url);
        console.log(response)
        const data = await response.json();
        this.setState({person: data, loading: false});
    }

    goBack() {
        this.props.onHandle(0)
    }

    render() {
        return (
           <div>
               <Button variant="contained" 
                    style = {{
                        backgroundColor: "#21b6ae",
                        color: "white",
                    }}
                    startIcon={<ArrowBackIcon />} 
                    onClick={this.goBack.bind(this)}
                />
               {this.state.loading || !this.state.person ? (
                    <div className='box-center'>Loading...</div>
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
        );
    }
}

export default Status;