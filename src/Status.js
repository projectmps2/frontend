import React, {Component} from 'react';

class Status extends React.Component {

    state = {
        loading: true,
        person: null,
    };

    // fetch data from API
    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({person: data.results[0], loading: false});
    }

    render() {
        return (
           <div>
               {this.state.loading || !this.state.person ? (
                    <div>loading...</div>
               )  : (
                    <div>
                        <div>Prenume: {this.state.person.name.first}</div>
                        <div>Nume: {this.state.person.name.last}</div>
                        <div>Grupa: {this.state.person.name.title} </div>
                        <div>Email: {this.state.person.email} </div>
                    </ div>
               )}
            </ div>
        );
    }
}

export default Status;