import { TextField } from '@material-ui/core';
import React, {Component} from 'react';


class Configuration extends Component {
    constructor() {
        super();
    }

    async postData() {
        try {

            let result = await fetch('', {
                method: 'post',
                mode: 'no-cors'
            });

        } catch(e) {
            console.log(e)
        }
    }

    render() {
        return (
            <>
            <TextField id="standard-basic" label="Informații despre materie" variant="standard"> </TextField>
            <br />
            <TextField id="standard-basic" label="Conditii intrare examen" variant="standard"> </TextField>
            <br />
            <TextField id="standard-basic" label="Bonusuri" variant="standard"> </TextField>
            </>
        );
    }
}

export default Configuration;