import React, {Component} from 'react';
import QRCode from 'qrcode';
import { Box, Button } from "@material-ui/core";
import { CircularProgress } from '@mui/material';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class QRgen extends Component {

    constructor() {
        super();
        this.interval = 0;
        this.base_url = "http://localhost:3000/";
        this.state = {
            imgSrc: ''
        };
        this.minuteTime = this.minuteTime.bind(this);
    }

    minuteTime() {
        return Math.floor(Date.now() / 1000 / 60);
    }
    
    regenerateQR = () => {
        QRCode.toDataURL(this.base_url + this.minuteTime().toString())
            .then((data) =>
                this.setState(() => ({
                    imgSrc: data
                }))
            );
    }
    
    componentDidMount() {
        this.regenerateQR()
        this.interval = setInterval(this.regenerateQR, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    goBack() {
        this.props.onHandle(10)
    }

    render() {
        return(
            <>
            <div><Button variant="contained" 
              style = {{
                  backgroundColor: "#21b6ae",
                  color: "white",
              }}
              startIcon={<ArrowBackIcon />} 
              onClick={this.goBack.bind(this)}
            /> </div>
            <Box textAlign='center'>
                <img style={{
                    marginTop:'10%',
                    minBlockSize: '400px'   
                }}
                    src={this.state.imgSrc}/>
                <CircularProgress style={{
                        position: 'fixed',
                        left: '48%',
                        top: '78%'
                    }}
                    size='65px'
                    variant="determinate" 
                    value={(Math.floor(Date.now() / 1000) % 60)/60*100}/>
            </Box>
            </>
        );          
    }
}
 
export default QRgen;