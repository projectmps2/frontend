import React, {Component} from 'react';
import HomeProfessorText from './HomeProfessorText'
import Configuration from './Configuration';
import Schedule from './Schedule';
import StatisticsStudent from './StatisticsStudent';

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
            return(< Configuration />);
        } else if (this.state.menuSelector === 12) {
            return(< Schedule />);
        } else if (this.state.menuSelector === 13) {
            return(<StatisticsStudent />);
        }
        return(
            <>
                <HomeProfessorText changePage={this.changePath.bind(this)}/>
            </>
        );
    }
}

export default HomeProfessor;