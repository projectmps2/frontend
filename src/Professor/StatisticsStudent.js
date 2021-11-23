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

class StatisticsStudent extends Component {
    goBack() {
        this.props.onHandle(10)
    }

    render() {
        for (let i = 0; i < dummy_data.length; i++) {
            attendance_for_chart[i] = [
                ['Studenti', 'Numar studenti'],
            ];

            for (let j = 0; j < dummy_data[i].attendance.length; j++) {
                attendance_for_chart[i][j + 1] = ["Q" + String(j + 1), dummy_data[i].attendance[j]];
            }
            
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
            <div style={{ display: 'flex', maxWidth: 900 }}>
            <Chart
                width={400}
                height={300}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data = {attendance_for_chart[0]}
                options={{
                title: dummy_data[0].date,
                chartArea: { width: '50%' },
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
                data = {attendance_for_chart[1]}
                options={{
                title: dummy_data[1].date,
                hAxis: { title: '', titleTextStyle: { color: '#333' } },
                vAxis: { minValue: 0 },
                chartArea: { width: '50%', height: '70%' },
                }}
            />
            </div>
            </>
        );
    }
}

export default StatisticsStudent;