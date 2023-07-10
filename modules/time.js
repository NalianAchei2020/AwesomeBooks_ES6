import { DateTime } from '../node_modules/luxon/src/luxon.js';

const timeDate = () =>{
const time = DateTime.local();
document.getElementById('time').innerHTML = time.toFormat('LLL d, yyyy HH:mm:ss');

}

export default timeDate;