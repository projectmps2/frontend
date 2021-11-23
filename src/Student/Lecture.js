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
            page: -1,
            n: null,
        };
        this.goBack = this.goBack.bind(this)
    }

    async componentDidMount() {
        const url = "http://localhost:8000/courses";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ configuration: data, loading: false });
    }

    async pageCourse(course, i) {
        this.setState({ page: i, n: course });
        // console.log(this.state.page)
    }

    goBack() {
        this.props.onHandle(0)
    }

    coursesPage() {
        this.props.onHandle(2)
        this.setState({page: -1})
    }

    render() {
        if(this.state.page > 0 && this.state.n != null) {
            console.log(this.state.page)
            return <LectureText courseName={this.state.n} comeBack={this.coursesPage.bind(this)}/>;
        }
        var data = [<Button> Not loaded</Button>]
        if (this.state.configuration !== null) {
            data = this.state.configuration.map(c =>
                <div>
                    <Button value={c.name} style={{ backgroundColor: '#21b6ae', color: "white" }}
                        variant="contained" size="large" color="secondary" onClick={()=>this.pageCourse(c.name, 20)}> {c.name}
                    </Button>
                    <br />
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
                        onClick={this.goBack}
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