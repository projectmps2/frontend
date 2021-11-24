import Chart from "react-google-charts";
import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const dummy_data = [
    {
        date: "20-11-2021",
        attendance: [123, 110, 93]
    },
    {
        date: "27-11-2021",
        attendance: [120, 118] 
    }
];

const attendance_for_chart = [];
const course_attendance_att = [];
const course_attendance_act = [];

class StatisticsStudent extends Component {

    constructor() {
        super();
        this.state = {
          course: "QR",
          data: []
        };
      }

    goBack() {
        this.props.onHandle(10)
    }

    getAttendances = async () => {
        const url = "http://127.0.0.1:8000/attendance"
        const response = await fetch(url);
        const data = await response.json();

        return data.map(
        at => ({course: at.course.name, date: new Date(at.date)})
        );
    }

    formatAttendanceData(course, data) {
        const atts = data.filter(att => att.course === course).sort((a1, a2) => a1.date < a2.date ? -1 : 1);
        var dayDict = {};

        atts.forEach(att => {
        var dictDate =  att.date.getFullYear() + "/" + att.date.getMonth() + "/" + att.date.getDay();
        if (dictDate in dayDict) {
            dayDict[dictDate].push(att);
        } else {
            dayDict[dictDate] = [att];
        }
        });

        const toMin = (att) => {
        return Math.floor(att.date.getTime() / 1000 / 60);
        }

        var sumDict = {};
        var entryList = [];

        for (const [key, list] of Object.entries(dayDict)) {
        var sum = 0, sums = [];
        var startMin = toMin(list[0]);
        var currMin = toMin(list[0]);
        for (const att of list) {
            currMin = toMin(att);
            if (currMin - startMin < 5) {
            sum++;
            } else {
            sums.push(sum);
            sum = 1;
            startMin = toMin(att);
            }
        }
        sums.push(sum);
        sumDict[list[0].date.toDateString()] = sums;
        entryList.push({date: list[0].date.toDateString(), attendance: sums});
        }

        return entryList;
    }

    async componentDidMount() {
        const attData = await this.getAttendances();
        console.log(attData);
        const graphData = this.formatAttendanceData(this.state.course, attData);
        console.log(graphData);
        this.setState({data: graphData});
    }

    render() {
        course_attendance_att[0] = [['Studenti', 'Numar studenti']];
        course_attendance_act[0] = [['Studenti', 'Numar studenti']];
        for (let i = 0; i < this.state.data.length; i++) {
            attendance_for_chart[i] = [
                ['Studenti', 'Numar studenti'],
            ];

            course_attendance_att[0][i + 1] = [this.state.data[i].date, Math.max.apply(Math, this.state.data[i].attendance)];
            course_attendance_act[0][i + 1] = [this.state.data[i].date, Math.min.apply(Math, this.state.data[i].attendance)];

            // for (let j = 0; j < dummy_data[i].attendance.length; j++) {
            //     attendance_for_chart[i][j + 1] = ["Q" + String(j + 1), dummy_data[i].attendance[j]];
            // }
        }

        return(
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
            {this.state.data.length > 0 ?
            <div style={{ display: 'flex', maxWidth: 900 }}>
            <Chart
                width={400}
                height={300}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data = {course_attendance_att[0]}
                options={{
                title: this.state.course + " Attendees",
                chartArea: { width: '80%', height: '80%' },
                hAxis: {
                    title: '',
                    minValue: 0,
                },
                vAxis: {
                    title: 'Studenti',
                },
                }}
                legendToggle
            />
            <Chart
                width={400}
                height={'300px'}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data = {course_attendance_act[0]}
                options={{
                title: this.state.course + " Active students",
                hAxis: { title: '', titleTextStyle: { color: '#333' } },
                vAxis: { minValue: 0 },
                chartArea: { width: '80%', height: '80%' },
                }}
            />
            </div>
            : <div> No attendances... </div>
            }
            </>
        );
    }
}

export default StatisticsStudent;