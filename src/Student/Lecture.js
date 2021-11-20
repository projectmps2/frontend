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
        const url = "http://192.168.100.7:5000/lecture";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ configuration: data, loading: false });
    }

    pageCourse(i) {
        this.setState({ page: i });
    }

    goBack() {
        this.props.onHandle(0)
    }

    render() {
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
                <div>
                </div>
                <LectureText pageSel={this.pageCourse.bind(this)} />
            </>
        );
    }
}

export default Lecture;