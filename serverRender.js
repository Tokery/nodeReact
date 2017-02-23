//fetch the data from the api

import axios from 'axios';
import config from './config';

axios.get(`${config.serverUrl}/api/contests`)
.then(resp => {
    console.log(resp.data);
})
.catch(err => {
    console.log (config.host)
    console.log (config.port)
    console.error(err)
});