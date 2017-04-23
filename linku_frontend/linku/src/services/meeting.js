import axios from 'axios';

export function getMeetingInfos(){
    return axios.get('/api/meetings/');
}
