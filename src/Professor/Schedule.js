import { Autocomplete } from '@mui/material';
import React, {Component} from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "./Schedule.css";
import AuthProvider from '../authenticationProvider';

const weekDays = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri'];
const hourStart = ['08',  '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
const hourFinish = ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
class Schedule extends Component {
    constructor() {
        super();
        this.state = {
            day: '',
            hourStart: '',
            hourFinish: '',
            nameCourse: null,
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
        try {
            let result = await fetch('http://127.0.0.1:8000/courses/' + this.state.nameCourse, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json', 
                },
                body: JSON.stringify({
                   date: this.state.day  + "-" + this.state.hourStart + "-" + this.state.hourFinish 
                })
            });

            console.log(result)

        } catch(e) {
            console.log(e)
        }
        console.log('hello ' + this.state.day + ' ' + this.state.hourFinish)  
    }

    goBack() {
        this.props.onHandle(10);
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