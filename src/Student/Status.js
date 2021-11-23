import React, {Component} from 'react';
import './Status.css'
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AuthProvider from '../authenticationProvider';


class Status extends Component {

    constructor() {
        super();
    }

    state = {
        loading: true,
        person: null,
        group: null,
    };

    getUserByEmail = async (email) => {
        const url = "http://127.0.0.1:8000/students/" + email;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
        });
    
        const data = await response.json( );
        console.log("User: " + data);
        return data;
    }

    escapeRegExp(string) {
        return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
    }

    replaceAll(str, find, replace) {
        return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
    }

    // // fetch data from API
    async componentDidMount() {
        const obj = await this.getUserByEmail(this.replaceAll(encodeURIComponent(new AuthProvider().getEmail()), ".", "%dot%"));
        this.setState({person: obj.user, loading: false, grupa: obj.group});
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
                    <div >
                        <div className='center'>Username: {this.state.person.name}</ div>
                        <div className='center'>Grupa: {this.state.grupa} </div>
                        <div className='center'>mail: {this.state.person.email} </div>
                    </ div>
               )}
            </ div>
        );
    }
}

export default Status;