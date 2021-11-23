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

    render() {
        if (this.state.menuSelector === 11) {
            return(< Configuration onHandle={this.changePath.bind(this)}/>);
        } else if (this.state.menuSelector === 12) {
            return(< Schedule onHandle={this.changePath.bind(this)}/>);
        } else if (this.state.menuSelector === 13) {
            return(<StatisticsStudent />);
        } else if (this.state.menuSelector === 14) {
            return(<QRgen onHandle={this.changePath.bind(this)}/>);
        }
        return(
            <>
                <HomeProfessorText logoutCallback={() => {this.props.logoutCallback()}}
                changePage={this.changePath.bind(this)}/>
            </>
        );
    }
}

export default HomeProfessor;