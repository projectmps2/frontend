import React, {Component} from 'react';
import HomeProfessorText from './HomeProfessorText'
import Configuration from './Configuration';
import Schedule from './Schedule';
import StatisticsStudent from './StatisticsStudent';
import QRgen from '../Scan/QRgen';

class HomeProfessor extends Component {

    constructor() {
        super();
        this.state = {
            menuSelector: 10
        };
    }

    changePath = (index) => {
        this.setState({menuSelector: index});
    }

    async exportCSV() {
        const url = "http://127.0.0.1:8000/download_csv/"
        window.open(url, "_blank")
    }

    render() {
        if (this.state.menuSelector === 11) {
            return(< Configuration onHandle={this.changePath.bind(this)}/>);
        } else if (this.state.menuSelector === 12) {
            return(< Schedule onHandle={this.changePath.bind(this)}/>);
        } else if (this.state.menuSelector === 13) {
            return(<StatisticsStudent onHandle={this.changePath.bind(this)}/>);
        } else if (this.state.menuSelector === 14) {
            return(<QRgen onHandle={this.changePath.bind(this)}/>);
        }
        return(
            <>
                <HomeProfessorText logoutCallback={() => {this.props.logoutCallback()}}
                changePage={this.changePath.bind(this)}
                exportCSV={this.exportCSV.bind(this)}
                />
            </>
        );
    }
}

export default HomeProfessor;