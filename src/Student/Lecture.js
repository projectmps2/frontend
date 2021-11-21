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

    pageCourse(event) {
        this.setState({ page: event.target.value });
    }

    goBack() {
        this.props.onHandle(0)
    }

    render() {
        if(this.state.page !== 0) {
            console.log(this.state.page)
            return <LectureText onCourse={this.pageCourse}/>;
        }
        var data = [<Button> Not loaded</Button>]
        console.log(this.state.configuration)
        if (this.state.configuration !== null) {
            data = this.state.configuration.map(c =>
                <div>
                    <Button value={c.name} style={{ backgroundColor: '#21b6ae', color: "white" }}
                        variant="contained" size="large" color="secondary" onClick={this.pageCourse.bind(this)}> {c.name}
                    </Button>
                    <br />
                </ div>
            )
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