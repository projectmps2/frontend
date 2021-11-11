import { Autocomplete } from '@mui/material';
import React, {Component} from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

const weekDays = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri'];
class Schedule extends Component {
    constructor() {
        super();
        this.state = {
            day: []
        };
    }

    onDayChoose(event, option) {
        this.setState({day: option});
    }

    async postData() {
        console.log('hello ' + this.state.day)
    }

    render() {
        return(
            <>
            <Autocomplete 
            disablePortal
            id="combo-box-demo" 
            options={weekDays}
            sx = {{width: 300}}
            onChange={this.onDayChoose.bind(this)}
            renderInput={(params) => <TextField {...params} label="Alege o zi" />} />
            <br />
            <br />
            <Autocomplete 
            disablePortal
            id="combo-box-demo" 
            options={weekDays}
            sx = {{width: 300}}
            onChange={this.onDayChoose.bind(this)}
            renderInput={(params) => <TextField {...params} label="Alege o zi" />} />
            <br />
            <br />
            <Button style = {{backgroundColor: '#21b6ae', color: 'white'}} variant='contained' color='primary' type="button" onClick={() => this.postData()}> Incarca modificarile </ Button>
            </>
        );
    }
}


export default Schedule;