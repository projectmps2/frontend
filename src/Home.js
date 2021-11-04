import React, {Component} from 'react';
import Status from './Status';
import HomeText from './HomeText';
import SubjectText from './SubjectText';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            pageSelector: 0
        };
    }

    // handle = (index) => {
    //     this.setState({pageSelector: index});
    // }

    handle(index) {
        this.setState({pageSelector: index});
    }

    render() {
        if (this.state.pageSelector === 1) {
            return(<Status />);
        } else if (this.state.pageSelector === 2) {
            return(<SubjectText />);
        }
        // passing vars to jsx
        return(<HomeText pageSelectorHandle={this.handle.bind(this)}/>);
            
    }
}
 
export default Home;