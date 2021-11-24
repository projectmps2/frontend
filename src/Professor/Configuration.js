import { TextField } from '@material-ui/core';
import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './Configuration.css';
import AuthProvider from '../authenticationProvider';


class Configuration extends Component {
    constructor() {
        super();
        this.state = {
            details: '',
            minim: '',
            bonus: '',
            nameCourse: null,
        };
    }

    getUserByEmail = async (email) => {
        const url = "http://127.0.0.1:8000/teachers/" + email;
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

    async componentDidMount() {
        const obj = await this.getUserByEmail(this.replaceAll(encodeURIComponent(new AuthProvider().getEmail()), ".", "%dot%"));
        console.log(obj.user)
        const url = "http://localhost:8000/courses"
        const response = await fetch(url)
        var data = await response.json()
        console.log(data[0].owner.user.name)
        console.log(obj.user.name)
        data = data.filter(course => course.owner.user.name === obj.user.name)
        this.setState({nameCourse: data[0].name})
        console.log(data[0].description)
    }

    async postData() {
        try {
            let result = await fetch('http://127.0.0.1:8000/courses/' + this.state.nameCourse, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json', 
                },
                body: JSON.stringify({
                   description: this.state.bonus  + " " + this.state.minim + " " + this.state.details 
                })
            });

            console.log(result)

        } catch(e) {
            console.log(e)
        }
        console.log('hello ' + this.state.details + ' ' + this.state.minim + " " + this.state.bonus)

        this.setState({details: ''});
        this.setState({minim: ''});
        this.setState({bonus: ''});
    }

    updateDetails(event) {
        this.setState({details: event.target.value});
    }

    updateMin(event) {
        this.setState({minim: event.target.value});
    }

    updateBonus(event) {
        this.setState({bonus: event.target.value});
    }

    goBack() {
        this.props.onHandle(10)
    }
    

    render() {
        return (
            <>
            <div>
            <Button variant="contained" 
                style = {{
                    backgroundColor: "#21b6ae",
                    color: "white",
                }}
                startIcon={<ArrowBackIcon />} 
                onClick={this.goBack.bind(this)}
            />
            </ div>
            <form onSubmit={this.handleSubmit} autoComplete='off' className='form-center'>
            <TextField id="standard-basic" label="Informații despre materie" variant="outlined" value={this.state.details} onChange={this.updateDetails.bind(this)}/>
            <br />
            <br />
            <TextField id="standard-basic" label="Conditii intrare examen" variant="outlined" value={this.state.minim} onChange={this.updateMin.bind(this)}> </TextField>
            <br />
            <br />
            <TextField id="standard-basic" label="Bonusuri" variant="outlined" value={this.state.bonus} onChange={this.updateBonus.bind(this)}> </TextField>
            <br />
            <br />
            <Button style = {{backgroundColor: '#21b6ae', color: 'white'}} variant='contained' color='primary' type="button" onClick={() => this.postData()}> Incarca modificarile </ Button>
            </ form>
            </>
        );
    }
}

export default Configuration;