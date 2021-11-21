import { TextField } from '@material-ui/core';
import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './Configuration.css';


class Configuration extends Component {
    constructor() {
        super();
        this.state = {
            details: '',
            minim: '',
            bonus: ''
        };
    }

    async postData() {
        // try {
        //     let result = await fetch('', {
        //         method: 'POST',
        //         mode: 'no-cors',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-type': 'application/json', 
        //         },
        //         body: JSON.stringify({
                   
        //         })
        //     });

        //     console.log(result)

        // } catch(e) {
        //     console.log(e)
        // }
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