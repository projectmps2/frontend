import { Autocomplete } from '@mui/material';
import React, {Component} from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "./Schedule.css";

const weekDays = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri'];
const hourStart = ['08',  '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
const hourFinish = ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
class Schedule extends Component {
    constructor() {
        super();
        this.state = {
            day: '',
            hourStart: '',
            hourFinish: ''
        };
    }

    onDayChoose(event, option) {
        this.setState({day: option});
    }

    chooseHourStart(event, option) {
        this.setState({hourStart: option});
    }

    chooseHourFinish(event, option) {
        this.setState({hourFinish: option});
    }

    async postData() {
        console.log('hello ' + this.state.day + ' ' + this.state.hourFinish)  
    }

    goBack() {
        this.props.onHandle(10);
    }

    render() {
        return(
            <><div>
                <Button variant="contained"
                    style={{
                        backgroundColor: "#21b6ae",
                        color: "white",
                    }}
                    startIcon={<ArrowBackIcon />}
                    onClick={this.goBack.bind(this)} />
            </div><div className='box-center'>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={weekDays}
                        sx={{ width: 300 }}
                        onChange={this.onDayChoose.bind(this)}
                        renderInput={(params) => <TextField {...params} label="Alege o zi" />} />
                    <br />
                    <br />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={hourStart}
                        sx={{ width: 300 }}
                        onChange={this.chooseHourStart.bind(this)}
                        renderInput={(params) => <TextField {...params} label="Ore incepere curs" />} />
                    <br />
                    <br />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={hourFinish}
                        sx={{ width: 300 }}
                        onChange={this.chooseHourFinish.bind(this)}
                        renderInput={(params) => <TextField {...params} label="Ore sfarsit curs" />} />
                    <br />
                    <br />
                    <Button style={{ backgroundColor: '#21b6ae', color: 'white' }} variant='contained' color='primary' type="button" onClick={() => this.postData()}> Incarca modificarile </Button>
                </div></>
        );
    }
}


export default Schedule;