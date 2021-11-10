import React, {Component} from 'react';

class Lecture extends Component {
   
    state = {
        loading: true,
        configuration: null,
    };

    async componentDidMount() {
        const url = "http://192.168.100.7:5000/lecture";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({configuration: data, loading: false});
    }

    render() {
        return(
            <>
            {/* <div>Informatii despre materie: {this.state.configuration.details}</div>  */}
            {/* <div>Cerinte minime de intrare in examne: {this.state.configuration.minim}</div>
            <div>Bonusuri: {this.state.configuration.bonus}</div>
            <div> Orar: </div> */}

            <div>
               {this.state.loading || !this.state.configuration ? (
                    <div>loading...</div>
                )  : (
                    <div>
                        <div>Informatii despre materie: {this.state.configuration.details} </div>
                        <div>Cerinte minime de intrare in examne: {this.state.configuration.minim}</div>
                        <div>Bonusuri: {this.state.configuration.bonus}</div>
                        <div> Orar: </div> 
                    </ div>
               )}
            </ div>
            </>
        );
    }
}

export default Lecture;