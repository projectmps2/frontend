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
            n: null,
        };
    }

    async componentDidMount() {
        const url = "http://localhost:8000/courses";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ configuration: data, loading: false });
    }

    async pageCourse(course, i) {
        this.setState({ page: i, n: course });
    }

    goBack() {
        this.props.onHandle(0)
    }

    render() {
        if(this.state.page !== 0 && this.state.n != null) {
            return <LectureText courseName={this.state.n}/>;
        }
        var data = [<Button> Not loaded</Button>]
        if (this.state.configuration !== null) {
            data = this.state.configuration.map(c =>
                <div>
                    <Button value={c.name} style={{ backgroundColor: '#21b6ae', color: "white" }}
                        variant="contained" size="large" color="secondary" onClick={()=>this.pageCourse(c.name, 1)}> {c.name}
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