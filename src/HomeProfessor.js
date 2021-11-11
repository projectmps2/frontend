import React, {Component} from 'react';
import HomeProfessorText from './HomeProfessorText'
import Configuration from './Configuration';

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
        }
        return(
            <>
                <HomeProfessorText changePage={this.changePath.bind(this)}/>
            </>
        );
    }
}

export default HomeProfessor;