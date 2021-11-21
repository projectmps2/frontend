import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LectureText from './LectureText';

class Lecture extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            configuration: null,
            page: 0,
        };
    }

    async componentDidMount() {
        const url = "http://localhost:8000/courses";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ configuration: data, loading: false });
        console.log(this.state)
    } 

    pageCourse(i) {
        this.setState({ page: i });

    }

    goBack() {
        this.props.onHandle(0)
    }

    render() {
       var data = [<Button> Not loaded</Button>]
       console.log(this.state.configuration)
       if(this.state.configuration !== null) {
        data = this.state.configuration.map(c => <Button style={{backgroundColor: '#21b6ae', color: "white"}} variant="contained" size="large" color="secondary" > {c.name}</Button>) 
        } 
        return (
            < >
                <div>
                    <Button variant="contained"
                        style={{
                            backgroundColor: "#21b6ae",
                            color: "white",
                        }}
                        startIcon={<ArrowBackIcon />}
                        onClick={this.goBack.bind(this)}
                    />
                </ div>
                <div className='form-center'>
                    {data}
                </ div>
            </>
        );
    }
}

export default Lecture;